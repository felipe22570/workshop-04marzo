import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/loginReducers";
import { productsReducer } from "../reducers/productsReducer";

const composeEnhancers =
   (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
   login: loginReducer,
   producto: productsReducer,
});

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
