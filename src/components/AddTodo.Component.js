import React from "react";


class AddTodo extends React.Component{

    state = {
        content : ""
    }
    handleChange = (e) => {
        this.setState({
            content : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({
            content : ""
        })
    }
    render(){
        return(
            <div className="add-todo col-12" style={{ backgroundColor:"#d2d2d2"}} >
                <p style={{ fontSize:30 , color:"white"}}>Add Todo</p>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="content">Content</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default AddTodo;