## Getting started with the integration

So we want an easy way to start adding our new code into our existing app.

What if we just make a little library? Then we can just do `<script src="js/new-stuff.js">`


## Start by bringing in webpack into our project

![Install webpack](/img/install-webpack.gif) <!-- .element: width="800" height="400" -->


## Configuring webpack

```
// webpack.config.js

module.exports = {
    entry: "./src/lib.js",
    output: {
        path: __dirname + "/js",
        filename: "lib.js"
    },
};
```


## Now actually code your entry point

We just want to prove we have everything wired up properly here

```
// src/lib.js

alert('Hello new lib!');
```


## We run webpack

![Yarn webpack](img/run-webpack-lib.gif)


## And now we add it into our actual webpage

```
// index.html

...
<script src="node_modules/backbone.localstorage/backbone.localStorage.js"></script>
<script src="js/lib.js"></script> // This is our new lib here
<script src="js/models/todo.js"></script>
<script src="js/collections/todos.js"></script>
<script src="js/views/todo-view.js"></script>
<script src="js/views/app-view.js"></script>
<script src="js/routers/router.js"></script>
<script src="js/app.js"></script>
```


## And tada...

![Hello new lib!](img/alert-hello.png)
