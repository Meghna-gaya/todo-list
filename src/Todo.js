import { useState } from "react";
import Tasks from "./Task";
import './Todo.css';

const Todo = () => {
    const [index, setIndex] = useState(0);
    const [tasks, setTasks] = useState([])
    const [userInput, setUserInput] = useState("");
    const handleAddTask = (event) => {
        if (userInput === "")
            alert("Add non empty task");
        else {
            event.preventDefault();
            setTasks([...tasks, { id: index, value: userInput }]);
            setIndex(index + 1);
            console.log(userInput)
            setUserInput("");
        }
    }
    const handleChange = (e) => {

        setUserInput(e.currentTarget.value);
    }

    return (
        <div className="todo-app-wrapper">
            <div className="todo-app">
                <h1 className="heading">Todo List</h1>
                <form className="form" onSubmit={handleAddTask}>
                    <input value={userInput} type={"text"} onChange={handleChange} placeholder="Enter task..." />
                    <button className="add-button">Add</button>
                </form>
                <Tasks tasks={tasks} setTasks={setTasks} />
            </div>
        </div>
    );
};

export default Todo;