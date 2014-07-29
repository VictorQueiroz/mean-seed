'use strict';

module.exports = function (io) {
	io.on('connection', function (socket) {
		console.log('A user connected!');

		socket.on('user authenticated', function(user){
			socket.emit('user authenticated', user);
		});
	});
};