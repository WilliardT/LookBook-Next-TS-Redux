import {RootState} from "@/redux/store";

export const searchValue = (state: RootState) => state.filter.searchValue
export const category = (state: RootState) => state.filter.category

export const sortOrder = (state: RootState) => state.filter.sortOrder