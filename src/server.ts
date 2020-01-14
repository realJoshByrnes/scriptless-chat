import config from '../config.json';
import Express from 'express';
import router from './router';
import reactViews from 'express-react-views';

const port = config?.port ?? 8080;
const app = Express();

app.set('view engine', 'tsx')
app.engine('tsx', reactViews.createEngine())

app.get('/', (req: Express.Request, res: Express.Response) => { res.redirect('/chat'); });
app.use('/chat/', router);
app.use('/', Express.static('./static/'));

app.listen(port, () => { console.log(`Listening on 0.0.0.0:${port}`); });