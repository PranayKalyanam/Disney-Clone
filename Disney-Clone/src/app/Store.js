import {configureStore} from '@reduxjs/toolkit'
import  useReducer  from '../features/user/userSlice'
// import { logger } from 'redux-logger'
import movieReducer from "../features/movie/movieSlice"



const Store = configureStore({
    reducer: {
        user: useReducer,
        movie: movieReducer,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
        serializableCheck: false,
    }),
});


export default Store