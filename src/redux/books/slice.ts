import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Book, BookSliceState, Status} from "@/redux/books/types";
import {fetchBooksData} from "@/redux/books/asyncAction";

const initialState: BookSliceState = {
    books: [],
    status: Status.LOADING,
}

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
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

export const {} = booksSlice.actions

export default booksSlice.reducer