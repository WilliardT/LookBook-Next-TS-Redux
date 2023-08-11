import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FilterSliceState, SortCategory} from "@/redux/filter/types";

const initialState: FilterSliceState = {
    searchValue: '*',
    category: SortCategory.ALL,
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
        }
    }
})

export const {setSearchValue, setCategory} = filterSlice.actions

export default filterSlice.reducer