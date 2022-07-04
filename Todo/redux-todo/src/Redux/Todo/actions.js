// Actions

export const ADD_TODOS = "ADD_TODOS";
export const DEL_TODO = "DEL_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";


// Action creators

const addTodos = (data) => {
    return {
        type: ADD_TODOS,
        payload:data
    };
}

const deleteTodo = (id) => {
    return {
        type: DEL_TODO,
        payload : {id}
    }
}

const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload :{id}
    }
}

export {addTodos,deleteTodo,toggleTodo};