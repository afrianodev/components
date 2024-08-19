import { useState } from "react"

export default function ToDoForm() {
    const[value, setValue] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(value)
    }

    return(<>
    <form className="text-gray-50" onSubmit={handleSubmit}>
        <input type="text" placeholder="What is your task today?" className="p-2 text-gray-600" onChange={(e) => setValue(e.target.value)} />
        <button type="submit" className="font-extrabold hover:text-gray-400 active:text-gray-600 border h-[40px] w-[80px]">Add</button>
    </form>
    </>)
}