const Author = require('../models/Author');

// @desc Create new Author
// @route POST /api/author
// @access PUBLIC

const createNewAuthor = async (req, res) => {
    if (!req.body.name) res.status(404).send("Not Found");

    const author = new Author({
        name: req.body.name,
        bio: req.body.bio,
        website: req.body.website
    });
    const result = await author.save();
    res.status(200).send(result);
}

// @desc get all Authors
// @route GET /api/author
// @access PUBLIC

const getAllAuthors = async (req, res) =>{
    const result = await Author.find();
    res.send(result);
}

// @desc get Author by ID
// @route GET /api/author/:id
// @access PUBLIC

const getAuthorById = async (req, res) =>{
    const result = await Author.find({_id: req.params.id });
    res.send(result);
}

module.exports = {
    createNewAuthor,
    getAllAuthors,
    getAuthorById
}