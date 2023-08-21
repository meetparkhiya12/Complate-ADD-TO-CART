import { createStore } from "redux";
import mainreducer from "./Services/Reducer";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'root',
    storage,
}

  const persistedReducer = persistReducer(persistConfig, mainreducer)

const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
let persistor = persistStore(store)

export default store
export {persistor}