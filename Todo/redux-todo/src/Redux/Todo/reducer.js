import { ADD_TODOS, DEL_TODO, TOGGLE_TODO } from "./actions";

export const todoReducer = (store = {todos:[]}, { type, payload }) => {
  switch (type) {
    case ADD_TODOS:
      return { ...store, todos:payload };
    case DEL_TODO:
      return {
        ...store,
        todos: store.todos.filter((todo) => todo.id !== payload.id),
      };
    case TOGGLE_TODO:
      return {
        ...store,
        todos: store.todos.map((todo) =>
          todo.id === payload.id ? {...todo,status: !todo.status} : todo
        ),
      };
    default:
        return store;
  }
};
