'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

module.exports = function (socket, models, io) {
	var User = models.User;
	var Partner = models.Partner;
	var Schedule = models.Schedule;
	var socketId = socket.id;

	function newNotification (notification) {
		var emitted;

		if(!notification.createdAt) {
			notification.createdAt = new Date();
		}

		User.find().exec().then(function (users) {
			users.forEach(function (user) {
				emitted = false;

				if(!user.notifications) {
					user.notifications = [];
				}

				user.notifications.push(notification);
				user.save();

				io.sockets.sockets.forEach(function (socket) {
					user.sockets.forEach(function (key) {
						if(key.id === socket.id) {
							if(notification.partner && !emitted) {
								Partner.findById(notification.partner).exec().then(function (partner) {
									notification.partner = partner;
									emitted = true;
									socket.broadcast.emit('user.notification.new', notification);
								});
							}

							if(!emitted) {
								socket.broadcast.emit('user.notification.new', notification);
							}
						}
					});
				});
			});
		});
	}

	// the user/partner socket should be deleted (in database)
	// everytime he give it away from his socket
	socket.on('disconnect', function () {
		User.update({
			'sockets.id': socketId
		}, {
			$pull: {
				'sockets': {
					id: socketId
				}
			}
		});
	});

	socket.on('partner.created', function (partnerId) {
		newNotification ({
			resource: 'partner',
			type: 'created',
			partner: partnerId
		});
	});

	socket.on('schedule.created', function (scheduleId) {
		Schedule
			.findById(scheduleId)
			.populate('inn')
			.populate('hotel')
			.populate('partner')
			.populate('departure.place')
			.populate('return.place')
			.exec()
			.then(function (schedule) {
				newNotification({
					resource: 'schedule',
					type: 'created',
					schedule: scheduleId
				});
			});
	});

	socket.on('user.notification.checked', function (notificationId) {
		User.update({
			'notifications._id': notificationId
		}, {
			$set: {
				'notifications.$.checked': true
			}
		}).exec().then(function (res) {
			socket.emit('user.notification.checked', res);
		}, function (err) {
			socket.emit('user.notification.checked.error', err);
		});
	});

	socket.on('user.connected', function (userId, socketId) {
		var shouldSave = true;

		User.findById(userId).exec(function (err, user) {
			if(err || !user) {
				return;
			}

			if(!user.sockets) {
				user.sockets = [];
			}

			var s = {
				id: socket.id,
				createdAt: new Date()
			};

			user.sockets.forEach(function (key) {
				if(key.id === socket.id) {
					shouldSave = false;
				}
			});

			if(shouldSave) {
				user.sockets.unshift(s);
				user.save();
				socket.emit('user.connected');
			}
		});
	});
};