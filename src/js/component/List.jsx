import React, { useState, useEffect } from "react";
import Home from "./Home.jsx";

function List() {
    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const apiURL = "https://fake-todo-list-52f9a4ed80ce.herokuapp.com/todos/user/giulianac";

    // GET API Tools - Loads the todos list on mount.
    useEffect(() => {
        fetch(apiURL, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setTodos(data);
            })
            .catch((error) => {
                console.log("Error", error);
            });
    }, []);

    //Renders when the todos are updated.
    useEffect(() => { updateDatabase() }, [todos]);

    //PUT API Tool - To add or delete a todo.
    const updateDatabase = () => {
        fetch(apiURL, {
            method: "PUT",
            body: JSON.stringify(todos),
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log("Error", error);
            });
    };

    const clearList = () => {
        // Function for the button to clear the todo list.
        setTodos([]);
        updateDatabase([]);
    };

    return (
        <>
            <ul>
                <li className="input-task">
                    <input type="text" placeholder="Add A New Task"
                        onChange={e => setNewTodo(e.target.value)}
                        value={newTodo}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && e.target.value === "") {
                                alert("You need to add a task first!")
                            }
                            else if (e.key === "Enter") {
                                setTodos(todos.concat({ label: newTodo, done: false }));
                                setNewTodo("");
                                updateDatabase();
                            }
                        }}
                    ></input>
                </li>
                {todos.length === 0 && <li className="no-tasks">There's No Tasks, Add A Task</li>}
                {todos.map((item, index) => {
                    return (
                        <li key={index}>
                            {item.label}
                            <i className="btn-close"
                                onClick={() => {
                                    setTodos(todos.filter((t, currentIndex) => index !== currentIndex));
                                    updateDatabase();
                                }} />
                        </li>
                    )
                })}
            </ul>
            <button className="btn btn-danger mt-5"
                onClick={clearList}>
                Delete All
            </button>
            <div className="footer text-muted">
                <small>{todos.length} tasks</small>
            </div>
        </>
    )
}

export default List;

