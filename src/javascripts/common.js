'use strict';

require(['app'], function () {
	if(!window.start) {
		throw new Error('Your application cannot be started because you doesn\'t have the window.start function.');
	}

	if(window.start) {
		window.start();
	}
});