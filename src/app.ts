import express from 'express';
import logger from 'morgan';
import log4js from 'log4js';

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger/openapi.json';

const app = express();

const log4jsLogger = log4js.getLogger();
log4jsLogger.level = 'info';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

log4jsLogger.info('Application successful started');

export default app;
