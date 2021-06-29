## Just-render

Generate HTML elements in Javascript by writing HTML strings only.

### Installation

### Usage

Import the package inside your project.


```js
// You have the choice between these two lines below.

import render from 'just-render'
```

Write your HTML code by calling render function.

```js
// Render is a function, so you can access it,
// like every function.
const my_element = render("<h1>Hello world !</h1>")

// But this has to be used with template strings
const my_element = render`<h1>Hello world !</h1>`

// Why ? Because you can easily add datas into it !
const name = 'world';
const my_element = render`<h1>Hello ${name} !</h1>`
```

### Some things to change

* Replace `laravel-mix` package by Webpack (or another one like esbuild) and Babel.
  
    The package `laravel-mix` is a package which permits to use webpack without adding configurations (all are already prepare by the package).
