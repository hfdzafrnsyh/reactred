import React from "react";


const Todos = ({todos , deleteTodos}) => {
   
    const todoList = todos.length ? (
        todos.map( todo => {
            return (
                <div className="todo" key={todo.id}>
                    <div className="todo-item col-12" style={{border:2 , borderColor:"red" , margin:10, padding:10 , backgroundColor:"#33ff33" , opacity:0.8}}>
                    <span onClick={ () => {deleteTodos(todo.id)}} style={{ opacity:1 , color:"white" , cursor:"pointer"}}>{todo.content}</span>
                    </div>
                </div>
            )
        })
    ) : (
        <p>You no have a todo</p>
    );
   
    return(
        <div className="todo-list">
            {todoList}
        </div>
    )
   
}


export default Todos;