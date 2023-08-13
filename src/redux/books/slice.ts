import {createSlice} from "@reduxjs/toolkit";
import {BookSliceState, Status} from "@/redux/books/types";
import {fetchBooksData} from "@/redux/books/asyncAction";
import Book from "@/app/components/books/Book";

const initialState: BookSliceState = {
    books: {
        items: [],
    },
    status: Status.SUCCESS,
    countFetch: 0,
}

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setDataBooks: (state, action) => {
            state.books = action.payload
        },
        setCountFetch: (state, action) => {
            state.countFetch = action.payload
        }
    },
    extraReducers:(builder) => {
        builder.addCase(fetchBooksData.pending, (state) => {
            state.status = Status.LOADING
        })
        builder.addCase(fetchBooksData.fulfilled, (state, action) => {
            state.books.items = action.payload
            state.status = Status.SUCCESS
        })
        builder.addCase(fetchBooksData.rejected, (state) => {
            state.status = Status.ERROR
        })
    }
})

export const {setDataBooks, setCountFetch} = booksSlice.actions

export default booksSlice.reducer