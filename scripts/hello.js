'use strict';
module.exports = (robot) => {
	robot.hear(/おみくじ>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send(', ' + username);
	});
};
