import ToDoForm from "./ToDoForm";
import { useState } from "react";

export default function ToDoList2() {
    const [todos, setTodos] = useState([]);

    return(<div className="mt-10 mx-auto flex flex-col w-[80%] justify-center items-center bg-gray-800 rounded-lg pb-6">
    <h1 className="text-2xl font-bold text-gray-50 my-4">To Do List 2</h1>
    <ToDoForm />
    </div>)
}