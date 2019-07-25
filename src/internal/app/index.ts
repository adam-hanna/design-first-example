import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import routes from '../routes';

// Parse .env
const result: dotenv.DotenvConfigOutput = dotenv.config();
 
if (result.error) {
  throw result.error
}

// Create Express server
const app: express.Application = express();

// Express configuration
app.set('port', process.env.PORT || 3000);
app.set('host', process.env.HOST || 'localhost');
app.set('env', process.env.NODE_ENV || 'development');
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Primary app routes.
 */
app.use('/', routes);

export default app;
