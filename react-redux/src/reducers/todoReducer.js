const initialData = {
    list: []
}
const todoReducer = (state = initialData, action) => {
    switch(action.type) {
        case "ADDTODO": 
            const {id, data} = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }
        case "DELETETODO":
            const newList = state.list.filter((e) => e.id !== action.id);
            return {
                ...state,
                list: newList
            }
        case "DELETEALLTODO": return {
            ...state,
            list: []
        }
        
        default: return state
    }
}

export default todoReducer;