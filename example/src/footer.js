import React, {Component} from 'react';

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
