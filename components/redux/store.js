import { configureStore } from "@reduxjs/toolkit";
 import rootReducer from "./rootReducer";
 import SagaData from "./saga";
 import createSagaMiddleWare from 'redux-saga'
 const sagaMiddleWare = createSagaMiddleWare();

 const store = configureStore(
    {
        reducer:rootReducer,
        middleware:()=>[sagaMiddleWare]
    }
 )

sagaMiddleWare.run(SagaData)
 export default store;