import React from "react";
import { Navbar } from 'react-bootstrap';
import TodoListView from '../TodoListView/TodoList';
import "./App.css";


function App() {
    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand >
                    TODO LIST
                </Navbar.Brand>
            </Navbar>
            <TodoListView />
        </div>
    );
}

export default App;