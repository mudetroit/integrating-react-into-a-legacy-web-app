## But I need to do something useful

Let's start by building a little jQuery plugin <!-- .element: class="fragment" data-fragment-index="1" -->

![Raised eyebrow](img/raised-eyebrow.gif) <!-- .element: class="fragment" data-fragment-index="2" -->

But isn't that just making the problem worse? <!-- .element: class="fragment" data-fragment-index="2" -->


## But isn't that just making the problem worse?

Not really: <!-- .element: class="fragment" -->

- We are keeping separation of our old code <!-- .element: class="fragment" -->
- The components that we are building can be used long term <!-- .element: class="fragment" -->
- Follows the isolation rule <!-- .element: class="fragment" -->


## So our project manager comes along

Users are seeing some funny things happen with the stats <!-- .element: class="fragment" data-fragment-index="1" -->

![That would be great](img/that-would-be-great.jpeg) <!-- .element: class="fragment" data-fragment-index="2" width="400" height="400"-->


## Meanwhile you in your head are thinking

![Excellent](img/excellent.gif)


## Let's look at how the footer is rendered

```
// index.html

<script type="text/template" id="stats-template">
    <span class="todo-count"><strong><%= remaining %></strong> <%= remaining === 1 ? 'item' : 'items' %> left</span>
    <ul class="filters">
        <li>
            <a class="selected" href="#/">All</a>
        </li>
        <li>
            <a href="#/active">Active</a>
        </li>
        <li>
            <a href="#/completed">Completed</a>
        </li>
    </ul>
    <% if (completed) { %>
    <button class="clear-completed">Clear completed</button>
    <% } %>
</script>
```


## And then in app-view.js

```
// js/views/app-view.js

render: function() {
    ...
    this.$footer.html(this.statsTemplate({
        completed: completed,
        remaining: remaining
    }));
    ...
}
```


## So let's build the footer

```
// src/footer.js

import React, {Component} from 'react';

export class Footer extends Component {
    render() {
        const remaining = this.props.todos.remaining();
        const completed = this.props.todos.completed();

        return (
            <div>
                <span className="todo-count">
                    <strong>{remaining.length}</strong> {remaining === 1 ? 'item' : 'items'} left
                </span>
                {this.renderFilters()}
                { completed ? <button className="clear-completed">Clear completed</button> : null }
            </div>
        );
    }
...

```


## And we render the filters section

```
// src/footer.js

...
    renderFilters() {
        return (
            <ul class="filters">
                <li><a class="selected" href="#/">All</a></li>
                <li><a href="#/active">Active</a></li>
                <li><a href="#/completed">Completed</a></li>
            </ul>
        );
    }
}
```


## Wait a minute const?

Oh right we added some ES6 there didn't we <!-- .element: class="fragment" data-fragment-index="1" -->

![Ermahgerd](img/ermahgerd.jpg) <!-- .element: class="fragment" data-fragment-index="2" -->

This is what some of you are saying right now  <!-- .element: class="fragment" data-fragment-index="2" -->


## So let's transform ES6 to ES5

First we install the dependencies we need, let's start with React  
`yarn add react react-dom`

![install-babel](img/yarn-add-react.gif)


## So let's transform ES6 to ES5

Then we install babel  
`yarn add --dev babel-core babel-loader babel-preset-2015 babel-preset-react`

![install-babel](img/yarn-add-babel.gif)


## Let's go an configure babel

```
// .babelrc

{
    "presets": [
        "es2015",
        "react"
    ]
}
```


## And now we configure webpack to pass our src files through babel-core

```
// webpack.config.js

...
module: {
    loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
    ],
},
```


## And now we can build our own little jQuery plugin to mount it

```
// src/lib.js

import React from 'react';
import ReactDOM from 'react-dom';

import {Footer} from './footer';

$.fn.holdsStatitics = function() {
    ReactDOM.render(<Footer todos={app.todos} />, this.get(0));
}
```


## And run webpack again

![webpack jquery plugin](img/run-webpack-jquery.gif)


## And now we wire up our old app to make use of it

```
// js/app.js

/*global $ */
/*jshint unused:false */
var app = app || {};
var ENTER_KEY = 13;
var ESC_KEY = 27;

$(function () {
	'use strict';

	// kick things off by creating the `App`
	new app.AppView();
    $('.todoapp .footer').holdsStatitics();
});
```


## Lastly we remove the old code rendering that info

```
// js/views/app-view.js

app.AppView = Backbone.View.extend({

    // Instead of generating a new element, bind to the existing skeleton of
    // the App already present in the HTML.
    el: '.todoapp',

-   // Our template for the line of statistics at the bottom of the app.
-    statsTemplate: _.template($('#stats-template').html()),
...
```


## Lastly we remove the old code rendering that info

```
// js/views/app-view.js

...
if (app.todos.length) {
    this.$main.show();
    this.$footer.show();

-   this.$footer.html(this.statsTemplate({
-       completed: completed,
-       remaining: remaining
-   }));
...
```


## Lastly we remove the old code rendering that info

```
//index.html

- <script type="text/template" id="stats-template">
-     <span class="todo-count"><strong><%= remaining %></strong> <%= remaining === 1 ? 'item' : 'items' %> left</span>
-     <ul class="filters">
-    ...
-     </ul>
-     <% if (completed) { %>
-     <button class="clear-completed">Clear completed</button>
-     <% } %>
- </script>
```


## And now we are rendering using React

![Stats rendered with React](img/stats-jquery-1.gif)
