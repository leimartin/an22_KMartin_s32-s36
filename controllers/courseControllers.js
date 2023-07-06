const Course = require('../models/Course');


/*
	Check if the email is already exists
	Steps:
		- use mongoose 'find' method to find duplicate emails
		- use the 'then' method to send a response back to the frontend applicaiton based on the result
*/

module.exports.checkEmailExists = (req) => {
	console.log(req)
	// the result is sent back to the frontend via the 'then' method found in the route file
	return Course.find({ email: req.email })

	.then(result => {
		// the find method returns a record if a match is found
		if(result) {
			return Promise.resolve(true);
			// no duplication email found
			// the user is not yet registered in the database
		} else {
			return Promise.resolve(false);
		};
	});
};