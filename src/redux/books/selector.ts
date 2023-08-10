import {RootState} from "@/redux/store";

export const selectBooksData = ((state: RootState) => state.books)