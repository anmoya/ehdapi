const express = require('express')
const router = express.Router();
const Post      = require('../models/Post');

let post = Post(
{
    titulo      : '¿Es recomendable estudiar historia?',
    subtitulo   : 'Historiadores de Chile',
    autor       : 'Juan',
    url         : 'www.google.cl',
    resumen     : 'La historia de vida de un historiador.',
    texto       : 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum '
});

router.get('/', ( req, res ) => {
    Post.find({}, (err, allPosts) => {
        if (err) console.log(err);
        else {
            res.send(allPosts);
        }
    });
    
});

router.get('/add', ( req, res ) => {
    Post.create(post, (err, createdPost) => {
        if(err) console.log(err);
        else {
            res.send({
                message: 'Post creado con exito.',
                post: createdPost
            });
        }
    });
});

router.get('/delete/:id', ( req, res ) => {
    Post.findByIdAndDelete(req.params.id, ( err, deletedObject ) => {
        if (err) console.log(err);
        else {
            res.send('Objeto eliminado correctamente');
        }
    });
});


module.exports = router;