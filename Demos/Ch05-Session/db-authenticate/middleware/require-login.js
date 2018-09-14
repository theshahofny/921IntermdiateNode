'use strict';

const errors = require("../errors");

module.exports = function(req, res, next) {
	if (req.session.loggedIn === true) {
		next();
	} else {
		next(new errors.AuthenticationError("You must be logged in to access this page."));
	}
};
