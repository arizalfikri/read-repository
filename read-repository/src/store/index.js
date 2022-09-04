import { applyMiddleware, legacy_createStore as createStore } from "redux";
import counterReducer from "./reducer/rootReducer";
import thunk from "redux-thunk";

let store = createStore(counterReducer, applyMiddleware(thunk));
export default store;
