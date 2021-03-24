let server = require( 'oxyz-express' );
server({
  pug: {
    root: 'dev'
  },
  sass: {
    root: 'dev'
  }
});
