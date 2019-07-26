import app from './internal/app';
import appContext from './context/app';
import Store from './store';

// Create the store
const store: Store = new Store(
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  process.env.POSTGRES_HOST,
  process.env.POSTGRES_DATABASE,
  parseInt(process.env.POSTGRES_PORT),
);

let appCtx: appContext = new appContext();
appCtx.store = store;
app.set('context', appCtx);

/**
 *  * Start Express server.
 */
const server = async () => {
  // Migrate the db.
  try {
    console.log('migrating db');
    await store.migrate();
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
