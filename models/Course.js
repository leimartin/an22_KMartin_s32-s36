const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	courseCode : {
		type : String,
		required : [true, "Course code is required"]
	},
	courseName : {
		type : String,
		required : [true, "Course name is required"]
	}
})

module.exports = mongoose.model("User", userSchema);
