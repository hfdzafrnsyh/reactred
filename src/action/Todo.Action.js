const deleteTodos = (id) => {
    return {
        type : "DELETE_TODO",
        id
    }
}

export default deleteTodos;