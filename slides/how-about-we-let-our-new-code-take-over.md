## How about we let our new code take over

So now we have an interesting base to start from:

- We have a jquery plugin that provided some new functionality, our confirmation dialog
- And we have the footer statistics being rendered via React
- We can build on this foundation


## First, just let React render the whole list

```
// src/todos-list.jsx

import React, {Component} from 'react';
```


## And then we hand the responsibility for that list to React

```
// js/app-view.js

```


## And we can remove the templates for the list and items

```
index.html

import React, {Component} from 'react';
```


## Repeat this basic pattern, until

```
// index.html

<body>
    <section class="todoapp"></section>
    <footer class="info">
        <p>Double-click to edit a todo</p>
        <p>Written by <a href="https://github.com/addyosmani">Addy Osmani</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
...
```


## And now we can simply render our TodoApp directly

```
// src/app.jsx (replaces src/lib.js)

import React from 'react';
import ReactDOM from 'react-dom';

import {TodosApp} from './todos-app';

ReactDOM.render(<TodosApp todos={app.todos}, document.querySelector('.todoapp'));
```
