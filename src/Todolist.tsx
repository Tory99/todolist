import React, { useState } from 'react';
import {Button} from 'react-bootstrap';

type Todo = {
    id: number;
    text: string; 
    isChecked: boolean;
};

const TodoList : React.FC = () => {
    const title : string = "Todo List";
    const [todos, setTodos] = useState<Todo[]>([
        {id:1 , text: 'stady', isChecked : false },
        {id:2 , text: 'plat', isChecked : false },
        {id:3 , text: 'eat', isChecked : false },
        {id:4 , text: 'sleep', isChecked : false },
        ]);

    const [newTodo, setNewTodo] = useState<string>();
    const [showDetail, setShowDetail] = useState<boolean>(false);
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

    const handleCheckedChange = (id: number) => {
        setTodos((prevItems) => 
            prevItems.map((item) => 
                item.id === id ? {...item, isChecked: !item.isChecked} : item
        )
    )};

    const addTodo = () => {
        if (newTodo) {
            setTodos([ ...todos, {id: Date.now(), text: newTodo, isChecked: false}]);
            setNewTodo('');
        }
    };

    const removeTodo = (id: number) => {
        setTodos(todos.filter((item) => item.id !== id));
    };

    const handleTodoClick = (todo: Todo) => {
        setShowDetail(!showDetail);
        setSelectedTodo(todo);
    };

    const handleClose = () => {
        setShowDetail(false);
    };

    return (
        <div>
        <h1>{title}</h1>
        <p></p>
        <div className='container'>
            <div>
            <input type='text' placeholder='Add a new task' 
                onChange={(e) => setNewTodo(e.target.value)}/>
            <Button variant='warning' onClick={addTodo}>Add</Button>
            </div> 
        </div>
        <p></p>
        <div className='container'>
            <ul>
                {
                    todos.map((todo, index) => (
                    <li key={index}>
                        <input type = "checkbox" onChange={()=>{ 
                            handleCheckedChange(todo.id)
                            }}></input>
                        <span onClick={() => handleTodoClick(todo)}>
                            {todo.isChecked ? <del>{todo.text}</del>
                            : todo.text}
                        </span>
                        <button onClick={() => removeTodo(todo.id)} className='delbutton'>
                        del
                        </button>
                        </li>
                    ))
                }
            </ul>
        </div>
        
        </div>
    );
    };

export default TodoList;