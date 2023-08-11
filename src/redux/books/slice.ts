import {createSlice} from "@reduxjs/toolkit";
import {BookSliceState, Status} from "@/redux/books/types";
import {fetchBooksData} from "@/redux/books/asyncAction";

const initialState: BookSliceState = {
    books: [],
    status: Status.SUCCESS,
}

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setDataBooks: (state, action) => {
            state.books = action.payload
        }
    },
    extraReducers:(builder) => {
        builder.addCase(fetchBooksData.pending, (state) => {
            state.status = Status.LOADING
        })
        builder.addCase(fetchBooksData.fulfilled, (state, action) => {
            state.books = action.payload
            state.status = Status.SUCCESS
        })
        builder.addCase(fetchBooksData.rejected, (state) => {
            state.status = Status.ERROR
        })
    }
})

export const {setDataBooks} = booksSlice.actions

export default booksSlice.reducer