import {RootState} from "@/redux/store";

export const selectBooksData = ((state: RootState) => state.books.books.items)

export const  countFetch = ((state: RootState) => state.books.countFetch)

export const loadingStatus = ((state: RootState) => state.books.status)
