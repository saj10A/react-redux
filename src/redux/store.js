import { legacy_createStore as createStore } from "redux";
import fruitReducer from "./fruit/fruitReducer";


const store = createStore(fruitReducer);

export default store;