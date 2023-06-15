import React from 'react'

const Todo = ({todo, done, index, checkTodo, deleteTodo}) => {

    return (
        <>
            <li>
                <span className={ ((done) ? 'done' : 'notdone')} onClick={() => checkTodo (index)}>
                    
                    
                    {todo}</span> <button onClick={() => deleteTodo (index)}> - </button></li>
        </>
    );
}
export default Todo