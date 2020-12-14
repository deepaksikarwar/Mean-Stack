const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    id: { 
        type: String,
        require: true
    },
    name: { 
        type: String,
        require: true
    },
});
module.exports = mongoose.model('Post', postSchema);