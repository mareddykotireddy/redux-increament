// import { rootReducer } from "./rootReducer";
import { legacy_createStore as createStore, applyMiddleware} from "redux";
import ReducerFile from "./reducer";


export const Store= createStore(ReducerFile, window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_())