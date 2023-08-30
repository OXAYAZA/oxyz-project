const { action, task } = require( 'oxyz-build' );

module.exports.build = task([
    action.clean({ src: 'dist' }),
    action.sass({ src: 'dev/**/!(_)*.scss', dest: 'dist' }),
    action.pug({ src: 'dev/!(_)*.pug', dest: 'dist' }),
    action.copy({ src: [ 'dev/**/*.js', 'dev/**/*.ico' ], dest: 'dist' }),
    action.minifyimg({ src: [ 'dev/**/*.jpg', 'dev/**/*.png' ], dest: 'dist' })
]);
