import './Task.css';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import { useState } from 'react';

const Tasks = (props) => {
    const [updatedTask, setUpdatedTask] = useState({});
    const handleEdit = (task) => {
        setUpdatedTask(task)
    }
    const handleTextChange = (e) => {
        setUpdatedTask({ id: updatedTask.id, value: e.target.value });
    }
    const handleDelete = (id) => {
        let filteredArr = props.tasks.filter((task) => task.id !== id);
        props.setTasks(filteredArr);
    }
    const handleDone = () => {
        console.log(updatedTask);
        if (updatedTask !== "") {
            props.tasks.map((task) => { if (task.id === updatedTask.id) { task.value = updatedTask.value } });
            setUpdatedTask({});
        }
    }
    return (
        <div className='task-list'>
            {
                props.tasks.map(task => (
                    <>
                        {task.id === updatedTask.id && <div className='task'>
                            <input type={"text"} defaultValue={task.value} onChange={handleTextChange} />
                            <div className='controls'>
                                <button className="done-button" type="button" onClick={() => handleDone(task.id)} >
                                    <DoneIcon sx={{ color: 'green', backgroundColor: 'white' }} />
                                </button>
                            </div>
                        </div>}
                        {task.id !== updatedTask.id && <div className='task'>
                            <h6>{task.value}</h6>
                            <div className='controls'>
                                <button className="edit-button" type="button" onClick={() => handleEdit(task)}>
                                    <EditIcon sx={{ color: 'blue' }} />
                                </button>
                                <button className="delete-button" type="button" onClick={() => handleDelete(task.id)} >
                                    <DeleteIcon sx={{ color: 'crimson', backgroundColor: 'white' }} />
                                </button>
                            </div>
                        </div>}
                    </>
                ))
            }
        </div>
    );
};

export default Tasks;