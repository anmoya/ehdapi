const express       = require('express');
const mongoose      = require('mongoose');
const bodyParser    = require('body-parser');
const postsRoutes   = require('./routes/posts');
const keys          = require('./config/keys');
// APP
const app = express();
console.log(keys.mongodbURI);
mongoose.connect(`${keys.mongodbURI}`);;

// Body parser
app.use(bodyParser.json());

// Modelos
const Post = require('./models/Post');

app.use('/api/posts', postsRoutes);

const port = 3000;
app.listen(port, () => console.log(`Corriendo en ${port}`));