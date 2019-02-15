import * as express from 'express';
import * as serveIndex from 'serve-index';

const port = 9000;

const app = express();

const www: string = './server/www';
app.use(express.static(www));
app.use(serveIndex(www, { icons: true }));

app.use((req, res, next) => {
  console.log('url not found', req.url);
  next();
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

