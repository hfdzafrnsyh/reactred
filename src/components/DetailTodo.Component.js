import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import ImageTodo from "./image/undraw_chore_list.png";
import deleteTodo from "../action/Todo.Action";

class DetailTodo extends React.Component{


    // state = {
    //     todos : null
    // }

    // componentDidMount(){
    //     let id = this.props.match.params.todo_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + `${id}` )
    //         .then( res => {
    //             this.setState({
    //                 todos : res.data
    //             })
    //         })
    // }

    handleClick = () => {
       this.props.deleteTodo(this.props.todos.id);
       this.props.history.push('/');
    }
    render(){
        const todos = this.props.todos ? (
            <div className="todos-item" style={{ margin:40}}>
            <img src={ImageTodo} style={{ width:300}}/>
                <h3 className="text-warning"><u>{this.props.todos.title}</u></h3>
                <p>{this.props.todos.body}</p>
                <div className="text-center">
                    <button className="btn btn-danger btn-sm" onClick={this.handleClick}>Delete</button>
                </div>
            </div>
        ) : (
            <div>Loading..</div>
        )

        return(
            <div>
            <p style={{ margin:30 , color:"blue" , fontSize:40}}><u>Detail Todo</u></p>
            <div>{todos}</div>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    let id = ownProps.match.params.todo_id
    return {
        todos : state.todos.find( (todo) => {
            return todo.id === id
        })
    }
}


const mapDispatchToProps = (dispatch) => {
    return{
        deleteTodo : (id) => { 
            dispatch(deleteTodo(id));
        }
    }
}
export default connect(mapStateToProps , mapDispatchToProps)(DetailTodo);