import React, { Component, PropTypes } from 'react';

class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {newTask: ''};
        this.addNewTask = this.addNewTask.bind(this);
        this.onKeyEnter = this.onKeyEnter.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    addNewTask(task) {
        this.setState({ newTask: task.target.value });
    }

    onKeyEnter(e) {
        if (e.keyCode === 13 && this.state.newTask.trim() !== '') {
            let taskToAdd = {
                todo: this.state.newTask.charAt(0).toUpperCase() + this.state.newTask.slice(1),
                isFinished: false
            };
            this.props.addTodo(taskToAdd);
            this.setState({ newTask: '' });
        }
    }

    handleSubmit() {
        if (this.state.newTask.trim() !== '') {
            let taskToAdd = {
                todo: this.state.newTask.charAt(0).toUpperCase() + this.state.newTask.slice(1),
                isFinished: false
            };
            this.props.addTodo(taskToAdd);
            this.setState({ newTask: '' });
        }
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Add task" value={this.state.newTask} onChange={this.addNewTask} onKeyUp={this.onKeyEnter} />
                <input type="submit" value="Add" onClick={this.handleSubmit} />
            </div>
        );
    }
}

AddTask.propTypes = {
    addTodo: PropTypes.func
};

export default AddTask;
