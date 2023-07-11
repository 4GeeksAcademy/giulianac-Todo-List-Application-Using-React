import React, { useState } from "react";

function List() {
    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [isShown, setIsShown] = useState(false);

    return (
        <>
            <ul>
                <li className="input-task">
                    <input type="text" placeholder="Add A New Task"
                        onChange={e => setNewTodo(e.target.value)}
                        value={newTodo}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                setTodos(todos.concat(newTodo));
                                setNewTodo("");
                            }
                        }}
                    ></input>
                </li>
                {todos.length === 0 && <li className="no-tasks">There's No Tasks, Add A Task</li>}
                {todos.map((item, index) => {
                    return (
                        <li key={index}>
                            {item} <i class="btn-close" 
                            onClick={() => setTodos(todos.filter((t, currentIndex) => index !== currentIndex))}/>
                        </li>
                    )
                })}
            </ul>
            <div className="footer text-muted">
                <small>{todos.length} tasks</small>
            </div>
        </>
    )
}

export default List;