import cookieParser from 'cookie-parser';
import passport from 'passport';
import session from 'express-session';
import app from './internal/app';
import routes from './internal/routes';
import appContext from './context/app';
import DB from './db';
const RedisStore = require('connect-redis')(session);

// Create the db
const db: DB = new DB(
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  process.env.POSTGRES_HOST,
  process.env.POSTGRES_DATABASE,
  parseInt(process.env.POSTGRES_PORT),
);

let appCtx: appContext = new appContext();
appCtx.db = db;
app.set('context', appCtx);

// use passport for sessions, backed by redis
app.use(session({ 
  store: new RedisStore({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  }),
  secret: process.env.SESSION_SECRET,
  saveUninitialized: true,
  resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(cookieParser());

/**
 * Primary app routes.
 */
app.use('/', routes);

/**
 *  * Start Express server.
 */
const server = async () => {
  // Migrate the db.
  try {
    console.log('migrating db');
    await db.migrate();
  } catch (e) {
    console.error('err migrating the database\n', e);
    process.exit(1);
  }

  app.listen(app.get('port'), app.get('host'), () => {
    console.log(
      '  App is running at http://%s:%d in %s mode',
      app.get('host'),
      app.get('port'),
      app.get('env')
    );
    console.warn('  Press CTRL-C to stop\n');
  });
}

export default server();
