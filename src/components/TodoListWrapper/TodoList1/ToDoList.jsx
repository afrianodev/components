import { useState } from "react"

export default function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(e) {
        console.log(e.target.value)
        setNewTask(e.target.value);
    }

    function addTask() {
        if(newTask !== ''){
            setTasks(tasks => [...tasks, newTask]);
            setNewTask('');
        }
    }
    function deleteTask(index) {
        console.log('Im deleting a task...')
        const updatedTasks = tasks.filter((element, i)=> i !== index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index) {
        if(index > 0) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index-1]] = [updatedTask[index-1], updatedTask[index]];
            setTasks(updatedTask)
        }
        
    }
    function moveTaskDown(index) {
        if(index < tasks.length -1) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index+1]] = [updatedTask[index+1], updatedTask[index]];
            setTasks(updatedTask)
        }
    }
    return(
    <div className="w-[60vw] border-2 mx-auto rounded-md mt-4 pb-4 flex flex-col justify-center items-center">
        <h1 className="my-4 text-2xl font-bold text-gray-700">ToDo List</h1>
        <div className="flex gap-4 mb-4">
            <input className="border-2"
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange} />
            <button className="w-24 text-gray-700 font-semibold bg-green-200 hover:bg-green-300  active:bg-green-500 active:text-white transition-colors"
            onClick={addTask}>Add</button>
        </div>
        <ul className="w-[90%] flex flex-col items-center gap-2">
            {tasks.map((task, index)=>
            <li className="text-gray-700 font-medium w-[90%] bg-gray-200 p-2 rounded-md flex items-center" key={index}>
                <span className="w-[75%]">{task}</span>
                <div className="mx-auto flex gap-2 justify-center items-center">
                    <button className="bg-red-200 hover:bg-red-300 active:bg-red-500 active:text-white p-1 text-gray-800"
                    onClick={()=>deleteTask(index)}>Delete</button>
                    <button className="bg-gray-300 p-1 text-gray-800 hover:bg-gray-400 active:bg-gray-700 active:text-white"
                    onClick={()=>moveTaskUp(index)}>Up</button>
                    <button className="bg-gray-300 p-1 text-gray-800 hover:bg-gray-400 active:bg-gray-700 active:text-white"
                    onClick={()=>moveTaskDown(index)}>Down</button>
                </div>
            </li>
            )}
        </ul>
    </div>
    )
}