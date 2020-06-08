import express from 'express';
import multer from 'multer';
import bodyParser from 'body-parser';
import updateRoute from './routes/update';

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

// const get = require();
// const post = require();
// const update = require();
// const remove = require();

// app.use('api/v1/files/file/uploads', get);
// app.use('api/v1/files/file/upload', post);
app.use('api/v1/files', updateRoute);
// app.use('api/v1/files/file/:id/delete', remove);

const port = (process.env.PORT || 3000);
app.listen(port, ()=> console.log(`Server now running on ${port}`))