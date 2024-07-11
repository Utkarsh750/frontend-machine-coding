import React, { useState, useEffect } from "react";
// import { MdDelete } from "react-icons/md";
// import { IoIosAddCircle } from "react-icons/io";
import "./todo.css";
// function Todos() {
//   const [todos, setTodos] = useState(() => {
//     // Load TODOs from local storage on app starts
//     const storedTodos = localStorage.getItem("todos");
//     return storedTodos ? JSON.parse(storedTodos) : [];
//   });
//   const [task, setTask] = useState("");
//   const [isEditing, setIsEditing] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);
//   const [editTask, setEditTask] = useState("");

//   // Update local storage whenever TODOs change
//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   const handleAddTodo = () => {
//     if (task.trim() !== "") {
//       setTodos([...todos, task]);
//       setTask("");
//     }
//   };

//   const handleRemoveTodo = (index) => {
//     const newTodos = todos.filter((_, i) => i !== index);
//     setTodos(newTodos);
//   };

//   const handleEditTodo = (index) => {
//     setIsEditing(true);
//     setEditIndex(index);
//     setEditTask(todos[index]);
//   };

//   const handleSaveEdit = () => {
//     if (editTask.trim() !== "") {
//       const newTodos = todos.map((todo, index) =>
//         index === editIndex ? editTask : todo
//       );
//       setTodos(newTodos);
//       setIsEditing(false);
//       setEditIndex(null);
//       setEditTask("");
//     }
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>TODO App</h1>
//         <div className="todo-input">
//           <input
//             type="text"
//             placeholder="Add a new task"
//             value={isEditing ? editTask : task}
//             onChange={(e) =>
//               isEditing ? setEditTask(e.target.value) : setTask(e.target.value)
//             }
//           />
//           <button onClick={isEditing ? handleSaveEdit : handleAddTodo}>
//             {/* <IoIosAddCircle /> */}+
//           </button>
//         </div>
//         <ul className="todo-list">
//           {todos.map((todo, index) => (
//             <li key={index}>
//               {todo}
//               <div>
//                 <button onClick={() => handleEditTodo(index)}>
//                   {/* <AiFillEdit /> */}
//                   Edit
//                 </button>
//                 <button onClick={() => handleRemoveTodo(index)}>
//                   {/* <MdDelete /> */}
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </header>
//     </div>
//   );
// }


function Todos() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const handleAddTodo = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO App</h1>
        <div className="todo-input">
          <input
            type="text"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={handleAddTodo}>
            +
          </button>
        </div>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <div>
                <button onClick={() => handleRemoveTodo(index)}>
                  -
                </button>
              </div>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default Todos;