'use strict';

module.exports = function (app, controller) {
	app
		.route('/')
		.get(controller.list)
		.post(controller.store);

	app
		.route('/:user')
		.get(controller.get)
		.delete(controller.destroy)
		.patch(controller.update);
};