const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	courseCode : {
		type : String,
		required : [true, "Course code is required"]
	},
	courseName : {
		type : String,
		required : [true, "Course name is required"]
	},
	// The "enrollments" property/field will be an array of objects containing the course IDs, the date and time that the user enrolled to the course and the status that indicates if the user is currently enrolled to a course
	enrollments : [
		{
			courseId : {
				type : String,
				required : [true, "Course ID is required"]
			},
			enrolledOn : {
				type : Date,
				default : new Date()
			},
			status : {
				type : String,
				default : "Enrolled"
			}
		}
	]
})

module.exports = mongoose.model("User", userSchema);
