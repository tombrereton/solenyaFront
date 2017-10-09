import express from 'express';

const app = express();

app.use('/', express.static('app'));

app.listen(process.env.PORT || 3000);