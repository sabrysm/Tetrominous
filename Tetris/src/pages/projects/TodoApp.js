import React, { Fragment } from "react";

class TodoApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [],
            todosInput: "",
            tasksDone: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const newTodos = this.state.todos;
        let counter = newTodos.length;
        const userInput = this.state.todosInput;
        const newTodo = {
            id: counter,
            val: userInput,
            taskDone: false
        };
        if (userInput) {
            this.setState(prevState => ({
                todos: [...prevState.todos, newTodo],
                todosInput: ""
            }));
        }
    }
    handleReset(e) {
        e.preventDefault();
        this.setState({
                todos: [],
                todosInput: "",
                tasksDone: []
            });
    }
    handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const newTodos = this.state.todos;
        const tasksDone = this.state.tasksDone;
        if (target.type === "checkbox") {
            newTodos.map((todo) => {
                if (name === todo.id.toString()) {
                    todo.taskDone = value;
                    const isFound = tasksDone.includes(todo);
                    if (value) {
                        if (!isFound)
                            tasksDone.push(todo);
                    }
                    else {
                        if (isFound) {
                            const indexOfObject = tasksDone.findIndex(obj => {
                                console.log(tasksDone);
                                return obj === todo;
                            });
                            tasksDone.splice(indexOfObject, 1);
                            console.log(indexOfObject);
                        }
                        
                    }
                }
                return todo;
            })

            this.setState({
                todos: newTodos,
                tasksDone: tasksDone
            });
        }
        else {
            this.setState({
                [name]: value
            });
        }
    }
    render() {
        const todosList = this.state.todos.reverse().map((todo, index, arr) => 
            <div key={todo.id} className="todos-item">
                <form className="todos-checkbox">
                    <input 
                    name={(todo.id).toString()}
                    type="checkbox" 
                    checked={todo.taskDone} 
                    onChange={this.handleChange}
                    id={todo.id} />
                    <label htmlFor={todo.id}></label>
                </form>
                <label>{todo.val}</label>
            </div>
            );
        return (
            <div className="todoApp-with-tasksDone">
                <div className="TodoApp">
                    <form onSubmit={this.handleSubmit} id="todosForm">
                        <input name="todosInput" type="text" value={this.state.todosInput} onChange={this.handleChange} />
                        <input className="todosInput" type="submit" value="Submit" />
                        <button className="todosInput" onClick={this.handleReset}>Reset</button>
                    </form>
                    <fieldset className="todos-list">
                        <legend>Todo List</legend>
                        <ul>{this.state.todos.length ? todosList : "No todo in the list."}</ul>
                    </fieldset>
                </div>
                <TasksDone className="TasksDone" TasksDone={this.state.tasksDone} />
            </div>

        );
    }
}

function TasksDone(props) {
    const TasksDoneList = props.TasksDone.map((task) => 
        <Fragment key={task.id} className="TasksDone-item">
            <li>{task.val}</li>
        </Fragment>
    );
    return (
        <fieldset className={props.className}>
            <legend>Tasks Done</legend>
            <ul className="listStyle">{props.TasksDone.length ? TasksDoneList : "You haven't done anything yet."}</ul>
        </fieldset>
    );
}

export default TodoApp;