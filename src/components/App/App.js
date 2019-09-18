import React, {Component} from 'react';

import './App.css';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import AddItem from '../AddItem';

export default class App extends Component {

    constructor() {
        super();

        this.newId = 100;

        this.state = {
            todoData: [
                this.createTodoItem('Buy milk'),
                this.createTodoItem('Buy apple'),
                this.createTodoItem('Buy bread'),
                this.createTodoItem('Buy beer')
            ],
            term: '',
            filter: 'all'
        };

        this.deleteItem = (id) => {
            this.setState(({todoData}) => {
                const index = todoData.findIndex((el) => el.id === id);
                const newState = [
                    ...todoData.slice(0, index),
                    ...todoData.slice(index + 1)
                ];

                return {todoData: newState}
            });
        };

        this.addItem = (text) => {
            this.setState(({todoData}) => {
                const newItem = this.createTodoItem(text);
                const newState = [
                    ...todoData,
                    newItem
                ];

                return {todoData: newState};
            });
        };

        this.onToggleImportant = (id) => {
            console.log('Toggle important', id);
        };

        this.onToggleDone = (id) => {
            this.setState(({todoData}) => {
                return {
                    todoData: this.toggleProp(todoData, id, 'done')
                };
            });
        };

        this.onToggleImportant = (id) => {
            this.setState(({todoData}) => {
                return {
                    todoData: this.toggleProp(todoData, id, 'important')
                };
            });
        };
    };

    createTodoItem(label) {
        return {
            label: label,
            important: false,
            done: false,
            id: this.newId++
        };
    }

    toggleProp(arr, id, propName) {
        const index = arr.findIndex((el) => el.id === id);
        const oldItem = arr[index];
        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        };

        return [
            ...arr.slice(0, index),
            newItem,
            ...arr.slice(index + 1)
        ];
    }

    search(items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item
                .label
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1;
        });
    };

    filter(items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        };
    };

    onSearchChange = (term) => {
        this.setState({term});
    };

    onFilterChange = (filter) => {
        this.setState({filter});
    };

    render() {

        const {todoData, term, filter} = this.state;
        const visibleItems = this.filter(this.search(todoData, term), filter);
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="mt-3 mb-3 container w-50">
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="d-flex mb-3 search">
                    <SearchPanel onSearchChange={this.onSearchChange}/>
                    <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange}/>
                </div>
                <TodoList
                    todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}/>
                <AddItem onAdd={this.addItem}/>
            </div>
        )

    }

}
