import React, {useState} from 'react'
import Todo from './Todo'

const Form = () => {
    const [todo, setTodo] = useState ({})
    const [todos, setTodos] = useState ([
        {todo: 'todo 1', done: false},
        {todo: 'todo 2', done: true},
        {todo: 'todo 3', done: false}        
    ]);

    const handleChange = e => setTodo ({todo: e.target.value})
    const addTodo = e => {
        if (Object.keys (todo).length === 0 || todo.todo.trim () === '' ) {
            alert ('No se admiten tareas vacías');
            return
        }
        todo.done = false;
        setTodos([...todos, todo])
    }
    const deleteTodo = index => {
        const newTodos = [...todos];
        newTodos.splice (index, 1)
        setTodos (newTodos)
    }
    const checkTodo = index => {
        
        const newTodos = [...todos];
        newTodos[index].done = !(newTodos[index].done);
        setTodos (newTodos);       
    }
    return (
        <>
            <form onSubmit={e => e.preventDefault ()}>
                <label>Nueva tarea</label>
                <input type="text" name="todo" id="todo" onChange={handleChange} />
                <button onClick={addTodo}>+</button>
            </form>
            <h2>Lista de tareas</h2>
            {
                todos.map((objeto, index) => (
                    <Todo todo={objeto.todo} done={objeto.done} key={index} index={index} deleteTodo={deleteTodo} checkTodo={checkTodo} />
                ))
            }
        </>
    );
}

export default Form