import { createStore } from "redux";
import reducer from "../src/Reducers/RootReducer";

const store = createStore(reducer);
export default store;
