import './Task.css';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Tasks = (props) => {
    const handleDelete = (value) => {
        console.log(value);
        let filteredArr = props.tasks.filter((t) => t.value !== value);
        props.setTasks(filteredArr);
    }

    return (
        <div className='task-list'>
            {
                props.tasks.map(task => (
                    <div className='task'>

                        <h6>{task.value}</h6>

                        <div className='controls'>
                            <button className="edit-button" type="button"><EditIcon /></button>
                            <button className="delete-button" type="button" onClick={() => handleDelete(task.value)} ><DeleteIcon /></button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Tasks;