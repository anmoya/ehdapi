const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    titulo      : String,
    subtitulo   : String,
    autor       : String,
    url         : String,
    resumen     : String,
    texto       : String,
    creado      : { type: Date, default: Date.now },
    updated     : { type: Date, default: Date.now }

});

const post = mongoose.model('Post', postSchema);

module.exports = post;