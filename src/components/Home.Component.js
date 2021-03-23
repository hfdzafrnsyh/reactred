import React from "react";
import Todos from "./Todo.Component";
import AddTodo from "./AddTodo.Component";
import { Link } from "react-router-dom";
import ImageTodo from "./image/undraw_chore_list.png";
import { connect } from "react-redux";

class Home extends React.Component {


    // state = {
    //     todos : [
    //       { id:1, content : "hello light"},
    //       { id : 2 , content : "hello dark"}
    //     ]

    //   }
    
    //   deleteTodos = (id) => {
    //     const todos = this.state.todos.filter( todo => {
    //       return todo.id !== id
    //     })
    
    //     this.setState({
    //       todos : todos
    //     })
    //   }
    
    //   addTodo = (todo) => {
    //     todo.id = Math.random();
    //     const todos = [...this.state.todos , todo]
    //     this.setState({
    //       todos : todos
    //     })
    //   }

    
    render(){

        const { todos } = this.props;
        const  todoList   = todos.length ? (
            todos.map( todo => {
                return (
                    <div className="todo-item card mt-3" style={{ cursor:"pointer" , height:150 }} key={todo.id}>
                    <img src={ImageTodo} style={{ width:200 , position:"absolute"}}/>
                        <Link to={"/todo/" + todo.id}>
                        <span className="card-header" style={{ margin:0 , padding:0 , fontSize:20 , overflow:"hidden" , left:80}}>{todo.title}</span>
                        </Link>    
                        <p>{todo.body}</p>
                    </div>
                )
            })
        ) : (
            <div>No todos</div>
        )

        return(
            <div>
                   <div className="container">
                    <div className="todo-judul mt-4 mb-4 text-center" >
                    <h1 className="text-primary" style={{ fontSize:50}}>Todo</h1>
                    </div>
                    {/* <Todos todos={this.state.todos} deleteTodos={this.deleteTodos}/>
                    <AddTodo addTodo={this.addTodo}/> */}

                    {todoList}
                    
                    </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        todos : state.todos
    }
}

export default connect(mapStateToProps)(Home);