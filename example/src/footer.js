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
