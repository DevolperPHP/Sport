const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    image: {
        type: String,
    },

    Date: {
        type: String,
    }
})

const Category = mongoose.model('Category', categorySchema, 'Category')
module.exports = Category;