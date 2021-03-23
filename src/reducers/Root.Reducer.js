const initState = {
    todos:[
        { id : '1' , title : "sunt aut facere repellat provident occaecati excepturi optio reprehenderit" , body : "cusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"},
        { id : '2' , title : "qui est esse" , body : "cusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"},
        { id : '3' , title : "sunt facere lattepre" , body : "atem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"}
    ]
}

const rootReducer = (state=initState, action) => {

    if(action.type === "DELETE_TODO"){
         
        let newTodo = state.todos.filter(todo => {
            return action.id !== todo.id
        })

        return {
            ...state,
            todos : newTodo
        }
    }
    return state;
}


export default rootReducer;