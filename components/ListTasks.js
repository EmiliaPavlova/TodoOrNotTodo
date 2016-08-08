import React, { Component, PropTypes } from 'react';

class ListTasks extends Component {
    constructor(props) {
        super(props);
        this.state = {isFinished: this.props.isFinished};
        // this.toggleStatus = this.toggleStatus.bind(this);
    }
    // <img src='http://cliparts.co/cliparts/pi7/8kR/pi78kR4xT.png' />
    // <li key={id} onClick={function(){ self.tasksArray.toggleStatus(task.todo) }}>

    toggleStatus(id) {
        this.props.onToggle(id);
    }

    render() {
        let tasksArray = this.props.tasksList.map(function(task, id) {
            id++;
            console.log(task);
            return (
                <li className={task.isFinished ? 'finished' : ''} key={id} onClick={this.toggleStatus.bind(this, id)}>{id}. {task.todo}, {task.isFinished ? 'finished' : 'not finished'}
                <span className={'image'} />
                </li>
            );
        }.bind(this));
        return (
            <ul>
                {tasksArray}
            </ul>
        );
    }
}

ListTasks.propTypes = {
    tasksList: PropTypes.array,
    isFinished: PropTypes.func,
    onToggle: PropTypes.func
};

export default ListTasks;
