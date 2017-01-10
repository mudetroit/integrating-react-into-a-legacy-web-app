## What are some JS frameworks/libraries we might want to replace?

- jQuery* <!-- .element: class="fragment" -->
- Backbone* <!-- .element: class="fragment" -->
- Knockout <!-- .element: class="fragment" -->
- Prototype <!-- .element: class="fragment" -->
- Coffeescript <!-- .element: class="fragment" -->
- JavaScript <!-- .element: class="fragment" -->


## Why might we want to replace jQuery?

- DOM based state <!-- .element: class="fragment" -->


## Perils of DOM based state

1. The DOM is supposed to be a view of data. The properties of DOM elements should be metadata for the elements themselves, not data from the model. <!-- .element: class="fragment" -->
2. You have the same issue as global variables  <!-- .element: class="fragment" -->


## Why might we want to replace jQuery?

- DOM based state
- Plugin ecosystem (version lock-in) <!-- .element: class="fragment" -->
- Hard to follow application flow <!-- .element: class="fragment" -->


## Why might we want to replace Backbone?

- Prone to memory leaks (zombie views) <!-- .element: class="fragment" -->
- Prone to triggering multiple DOM reflows <!-- .element: class="fragment" -->
- Hard to follow application flow (again) <!-- .element: class="fragment" -->
