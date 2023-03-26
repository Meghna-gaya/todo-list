import './Task.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Tasks = (props) => {
    const handleEdit = (e) => {

    }

    const handleDelete = (e) => {
        // e.preventDefault();
        // console.log(e.target.value)
        console.log(e)
        // props.setTasks(props.tasks.filter(i => i != e.target.value));
    }

    return (
        <div className='task-list'>
            {
                props.tasks.map(
                    task =>
                        <div className='task' key={task.id}>

                            <h6>{task.value}</h6>
                            <div className='controls'>
                                <button onClick={handleEdit}><EditIcon /></button>
                                <button value={task.id} onClick={handleDelete}><DeleteIcon /></button>
                            </div>
                        </div>
                )
            }
        </div >
    );
};

export default Tasks;