import config from '../config.json';
import express from 'express';

const port = config?.port ?? 222;

const app = express();
app.set('view engine', 'hbs');


type renderCallback = (err: Error, html: string) => void;
function partialRender(this: express.Response, view: string, callback?: renderCallback): void;
function partialRender(this: express.Response, view: string, options?: object, callback?: renderCallback): void;

function partialRender(this: express.Response, name: string, options?: object | renderCallback, callback?: renderCallback): void {
  let done = callback;
  if (typeof options === 'function') { // As per https://github.com/expressjs/express/blob/master/lib/application.js
    done = (options as renderCallback);
  }
  this.render(name, options ?? {}, (err, html): void => {
    if (typeof err !== 'undefined') {
      return done?.call(err, html);
    }

    // If it contains our <!-- STARTLIVESTREAM --> tag, use this.write() instead of this.send()
    html += '<h2>Added for testing</h2>'; // String manipulation

    if (typeof done === 'undefined') { // No callback
      this.send(html);
    }
    else {
      callback.call(undefined, err, html);
    }
  });
}

app.get('/', function (req, res) {
  partialRender.bind(res)('index', { title: 'Hey', message: 'Hello there!' }, (err: Error, html: string) => {
    res.write(`<h1>Test</h1>${html}`, 'utf8');
    setTimeout(()=>{ res.write('<span>This</span>') }, 2000);
  })
})


app.listen(port, () => {
  console.log(`Listening on 0.0.0.0:${port}`);
});