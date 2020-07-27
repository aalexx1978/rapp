import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/allReducers";
import thunk from "redux-thunk";
import logger from "redux-logger";
export default function configureStore() {
    return createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
        compose(applyMiddleware(thunk, logger))
    );
}
