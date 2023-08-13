import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FilterSliceState, Sort0rOderBy, SortCategory} from "@/redux/filter/types";

const initialState: FilterSliceState = {
    searchValue: '*',
    category: SortCategory.ALL,
    sortOrder: Sort0rOderBy.RELEVANCE,
}

export const filterSlice = createSlice({
    name: 'searchFilters',
    initialState,
    reducers: {
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        },
        setCategory: (state, action: PayloadAction<SortCategory>) => {
            state.category = action.payload
        },
        setSortOrder: (state, action: PayloadAction<Sort0rOderBy>) => {
            state.sortOrder = action.payload
        }
    }
})

export const {setSearchValue, setCategory, setSortOrder} = filterSlice.actions

export default filterSlice.reducer