## Hold on a minute

![Stats rendered with React](img/stats-jquery-1.gif) <!-- .element: class="fragment" -->

Those stats aren't updating<!-- .element: class="fragment" -->


## What the hell is going on?

![Picard says WTF](img/wtf-picard.jpg)

Didn't React promise to rerender when the props change?


## Well yes it did, but...

Since the props are the Backbone collection and its object reference never changed React didn't know to rerender <!-- .element: class="fragment" -->

But there is a solution! <!-- .element: class="fragment" -->


## We listen for the changes

```
// src/footer.jsx

export class Footer extends Component {
    constructor(props) {
        super(props);
        this.rerender = this.rerender.bind(this)
    }

    componentWillMount() {
        this.props.todos.on('add remove change reset', this.rerender);
    }

    componentWillUnmount() { this.props.todos.off(this.rerender); }

    rerender() { this.forceUpdate(); }
...
```


## And now we get

![Updating stats](img/stats-jquery-2.gif)
