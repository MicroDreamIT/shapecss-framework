const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


//for dev
// mix.setPublicPath('public/');
// mix.setResourceRoot('public/');

mix.setResourceRoot('../');

mix.js('resources/assets/js/component/Accordion.js', 'src/js/Accordion.js');


mix.js('resources/assets/js/shape.js', 'public/js/shape.js')
   .sass('resources/assets/sass/main.scss', 'public/css/shape.css');


//for production
// mix.js('resources/assets/js/shape.js', 'public/js/shape.min.js')
//    .sass('resources/assets/sass/main.scss', 'public/css/shape.min.css');

// mix.copy('fonts', 'public/fonts');