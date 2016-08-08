import React, { Component, PropTypes } from 'react';
import Header from './Header.js';
import AddTask from './AddTask.js';
import ListTasks from './ListTasks.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { tasks: [] };
        this.callback = this.callback.bind(this);
    }
    callback(task) {
        let newTask = [...this.state.tasks, task];
        this.setState({
            tasks: newTask,
            isFinished: false
        });
    }
    toggleStatus(id) {
        let newTasks = [...this.state.tasks];
        newTasks[id - 1].isFinished = !newTasks[id - 1].isFinished;
        this.setState({tasks: newTasks});
    }
    render() {
        return (
            <div>
                <Header />

                <AddTask addTodo={this.callback} />
                <ListTasks tasksList={this.state.tasks} onToggle={this.toggleStatus.bind(this)} />

            </div>
        );
    }
}

export default App;
