export const addTodo = (data) => {
    return {
        type: "ADDTODO",
        payload: {
            id: new Date().getTime().toString(),
            data:data
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type: "DELETETODO",
        id
    }
}

export const deleteAllTodo = () => {
    return {
        type: "DELETEALLTODO"
    }
}