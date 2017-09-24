const mongoose = require('mongoose');

// Course Schema

const courseSchema = mongoose.Schema({
	name:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Course = module.exports = mongoose.model('Course', courseSchema);




module.exports.getCourses = (callback, limit) => {
	Course.find(callback).limit(limit);
}

module.exports.getCoursesById = (id, callback) => {
	Course.findById(id, callback);
}

module.exports.addCourse = (course, callback) => {
	Course.create(course, callback);
}

module.exports.updateCourse = (id, course, options, callback) => {
	let query = { _id: id};
	let update = {
		name: course.name
	}
	Course.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeCourse = (id, callback) => {
	let query = { _id: id};
	Course.remove(query, callback);
}
