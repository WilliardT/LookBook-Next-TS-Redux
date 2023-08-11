import {RootState} from "@/redux/store";

export const selectBooksData = ((state: RootState) => state.books.books.items)
export const countBooks = ((state: RootState) => state.books.books.totalItems)
