## Okay, but I use backbone...

I mean this is even a Backbone app, why are we using a jQuery plugin?! <!-- .element: class="fragment" -->


## First we have to expose our components to the legacy code

```
// webpack.config.js

output: {
    path: __dirname + "/js",
    filename: "lib.js",
    library: "Components",
    libraryType: "var",
},
```


## And we update our lib to simply export our Footer

```
// src/lib.js

export {Footer} from './footer';
```


## We update the app-view to handle the rendering

```
// js/views/app-view.js

initialize: function () {
    ...
    var Footer = React.createElement(
        Components.Footer,
        {todos: app.todos},
        []);
    ReactDOM.render(Footer, this.$footer.get(0));
},

```


## Finally taking out our jquery plugin call

```
// js/app.js

$(function () {
	'use strict';

	// kick things off by creating the `App`
	new app.AppView();
-   $('.todoapp .footer').holdsStatitics();
});
```


## And tada!... or maybe not

![React not found](img/react-not-found.png)


## We need to expose React and ReactDOM

So first we add another webpack loader `expose-loader`
![Add expose loader](img/yarn-add-expose-loader.gif)


## And then we configure it in webpack

```
// webpack.config.js

module: {
    loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        { test: require.resolve('react'), loader: 'expose-loader?React'},
        { test: require.resolve('react-dom'), loader: 'expose-loader?ReactDOM'},
    ],
},
```


## There we go rendering within the backbone view

![Backbone managing stats](img/rendered-with-backbone.png) <!-- .element: width="500" height="400" -->
