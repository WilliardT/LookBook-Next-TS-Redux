import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import books from './books/slice'
import filter from './filter/slice'

export const store = configureStore({
    reducer: {
        books,
        filter,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const  useAppDispatch = () => useDispatch<AppDispatch>();