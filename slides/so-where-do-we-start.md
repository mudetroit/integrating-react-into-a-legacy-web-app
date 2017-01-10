## So where do we start?

The obvious answer is  <!-- .element: class="fragment" data-fragment-index="1" --> [create-react-app](https://github.com/facebookincubator/create-react-app) <!-- .element: class="fragment"  data-fragment-index="1" -->

Unfortunately, it is more geared for greenfield projects not ones that already exist. <!-- .element: class="fragment" data-fragment-index="2" -->


## Okay, then what?

`<script src='js/react.js'>` <!-- .element: class="fragment" -->

- Might be a good option for investigation <!-- .element: class="fragment" -->
- Likely excludes you from using ES6/JSX <!-- .element: class="fragment" -->
- You lose some performance optimizations <!-- .element: class="fragment" -->


## Well what is left?

You need a tool to transform your code into something your users can consume <!-- .element: class="fragment" data-fragment-index="1" -->

- <!-- .element: class="fragment" data-fragment-index="2" --> [Browserify](http://browserify.org/) <!-- .element: class="fragment" data-fragment-index="2" -->
- <!-- .element: class="fragment" data-fragment-index="3" --> [Rollup](http://rollupjs.org/) <!-- .element: class="fragment" data-fragment-index="3" -->
- <!-- .element: class="fragment" data-fragment-index="4" --> [Webpack](https://webpack.js.org/) <!-- .element: class="fragment" data-fragment-index="4" -->
    - "Ugh this documentation is horrible" <!-- .element: class="fragment" data-fragment-index="5" -->
    - Has won the developer mind share <!-- .element: class="fragment" data-fragment-index="6" -->
