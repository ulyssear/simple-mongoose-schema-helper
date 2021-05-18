const mix = require('laravel-mix')

/*
 * Main scripts of package
 */

mix.js('src/index.js', 'build/index.js')


/*
 * Used for examples
 */
mix.js('example/src/example.js', 'example/build/index.js')