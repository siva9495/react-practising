import React,{useState} from 'react'

const TodoList1 = () => {

    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask =()=>{
        if(newTask != ''){
            setTasks([...tasks,{text: newTask, completed: false }]);
            setNewTask('');
        }
    }

    const toggleCompletion = (index) => {
        const updatedTask = tasks.map((task,i) => 
            i === index ? {...task, completed: !task.completed}: task
        )
        setTasks(updatedTask);
    }

  return (
    <div className='div_container_todolist'>
        <div className='div_content_todolist'>
            <span id='title_todolist'>Todo List</span>
            <input
            className='input_todolist'
            placeholder='Enter TodoList Title'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            />
            <button id='btn_add_task' onClick={addTask}>Add Task</button>

            <ul>
                {tasks.map((task,index) => (
                    <li 
                    key={index}
                    onClick={() => toggleCompletion(index)}
                    style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                    >{task.text}</li>
                ))}
            </ul>
            
        </div>
    </div>
  )
}

export default TodoList1;