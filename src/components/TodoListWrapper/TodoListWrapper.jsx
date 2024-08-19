import ToDoList from "./TodoList1/ToDoList"
import ToDoList2 from "./TodoList2/ToDoList2"
import ToDoList3 from "./TodoList3/ToDoList3"

export default function ToDoListWrapper() {
    return(<>
    <ToDoList />
    <ToDoList2 />
    <ToDoList3 />
    </>)
}