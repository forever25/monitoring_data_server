import koa from 'koa';
// import path from 'path';
import JWT from 'koa-jwt';
import BodyParser from 'koa-bodyparser';
import json from 'koa-json';
import cors from '@koa/cors'
import compose from 'koa-compose';
import errorHandler from './common/errorHandler';
import router from './routes/router';
import { logger, accessLogger } from '@/utils/logger';
import config from './config'

const jwt = JWT({ secret: config.JWT_SECRET }).unless({
    path: [
        /\/user/,
        /\/role/
    ]
});
const bodyParser = BodyParser({
    enableTypes: ['json', 'form', 'text']
});
const middleware = compose([
    accessLogger(),
    errorHandler,
    bodyParser,
    cors(),
    json(),
    router(),
    jwt
]);
const port = 3001;
const app = new koa();
app.use(middleware);
app.listen(port, () => {
    console.log('This server is running at http://localhost:' + port);
});

app.on('error', err => {
    logger.error(err);
});
