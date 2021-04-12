import React from 'react'
import "./App.css";
import { useState } from "react";
import {firestore} from "./firebase"
import firebase from './firebase'
import {useCollectionData} from 'react-firebase-hooks/firestore'



const Todos = () => {
    const [todo, setTodo] = useState("");
    
    const todosRef = firestore.collection(`todos/`);
    console.log("todosRef", todosRef)
    const [todos] = useCollectionData(todosRef, { idField: "id" });
    console.log("todos", todos)
  
    const onSubmitTodo = (event) => {
      event.preventDefault();
  
      setTodo("");
      todosRef.add({
          text: todo,
          complete: false,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
      })
    };
  
    return (
      <>
        <header>
        </header>
        <main>
          <form onSubmit={onSubmitTodo}>
            <input
              required
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              placeholder="Add ToDoS"
            />
            <button type="submit">Add</button>
          </form>
          {todos && todos.map((todo) => <Todo key={todo.id} {...todo} />)}
        </main>
      </>
    );
  };
  
  const Todo = ({ id, complete, text }) => {
    const todosRef = firestore.collection(`todos/`);
    const onCompleteTodo = (id, complete) =>
      todosRef.doc(id).set({ complete: !complete }, { merge: true });
  
    const onDeleteTodo = (id) => todosRef.doc(id).delete();
    const onEditTodo = (id) => {
      let edit = prompt('edit');
      if (String(edit) !== ""){
        todosRef.doc(id).update({
          text: edit
        });
      }
    }
  
    return (
      <div key={id} className="todo">
        <button
          className={`todo-item ${complete ? "complete" : ""}`}
          tabIndex="0"
          onClick={() => onCompleteTodo(id, complete)}
        >
          {text}
        </button>
        <button onClick={() => onEditTodo(id)}>edit</button>
        <button onClick={() => onDeleteTodo(id)}>x</button>
      </div>
    );
  };
  
  export default Todos;