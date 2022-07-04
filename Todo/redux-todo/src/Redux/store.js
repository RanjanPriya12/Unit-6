import { combineReducers, legacy_createStore as createStore } from "redux";
import { todoReducer } from "./Todo/reducer";
import { authReducer } from "./Auth/reducer";

const rootReducer = combineReducers({
  todosStore : todoReducer,
  authStore : authReducer,
})
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store.subscribe(() => console.log(store.getState()));