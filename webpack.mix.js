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
mix.js('resources/assets/js/shape.js', 'public/js/shape.js')
   .sass('resources/assets/sass/main.scss', 'public/css/shape.css');

//for production
// mix.js('resources/assets/js/shape.js', 'public/js/shape.min.js')
//    .sass('resources/assets/sass/main.scss', 'public/css/shape.min.css');