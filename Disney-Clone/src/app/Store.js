import {configureStore} from '@reduxjs/toolkit'
import  useReducer  from '../features/user/userSlice'
// import { logger } from 'redux-logger'


const Store = configureStore({
    reducer: useReducer,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
        serializableCheck: false,
    })
})


export default Store