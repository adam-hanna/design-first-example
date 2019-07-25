import app from './internal/app';
import appContext from './context/app';

let context: appContext = new appContext();
app.set('context', context);

/**
 *  * Start Express server.
 */
const server = app.listen(app.get('port'), app.get('host'), () => {
  console.log(
    '  App is running at http://%s:%d in %s mode',
    app.get('host'),
    app.get('port'),
    app.get('env')
  );
  console.log('  Press CTRL-C to stop\n');
});

export default server;
