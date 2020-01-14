import config from '../config.json';
import express from 'express';
import router from './router';

const port = config?.port ?? 8080;
const app = express();

app.use('/chat/', router);
app.set('view engine', 'hbs');

app.listen(port, () => {
  console.log(`Listening on 0.0.0.0:${port}`);
});