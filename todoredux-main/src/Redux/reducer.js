const initState = {
    filters: {
        search: ''
    },
    todoList: [
        { id: 1, name: "Learn React" },
        { id: 2, name: "Learn Redux" },
        { id: 3, name: "Learn .Net" },
        { id: 4, name: "Learn English" },
        { id: 5, name: "Learn Fe" },
    ]
};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [...state.todoList, action.payload] 
            };
        case 'filters/searchTodo':
             return {
                ...state,
                filters:{
                    ...state.filters,
                    search: action.payload 
                }
            }
        default:
            return state;
    }
};

export default rootReducer;
