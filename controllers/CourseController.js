const Course = require('../models/Course');

// @desc Create new Course
// @route POST /api/course
// @access PUBLIC


const createNewCourse = async (req, res)=>{
    if (!req.body.name) res.status(404).send("Not Found");

    const course = new Course({
        name: req.body.name,
        description: req.body.description,
        author: req.body.author
    });
    const result = await course.save();
    res.status(200).send(result);
}

module.exports = {
    createNewCourse
}

