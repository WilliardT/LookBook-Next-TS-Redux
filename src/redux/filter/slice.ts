import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FilterSliceState} from "@/redux/filter/types";

const initialState: FilterSliceState = {
    searchValue: '',
}

export const filterSlice = createSlice({
    name: 'searchFilters',
    initialState,
    reducers: {
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        }
    }
})

export const {setSearchValue} = filterSlice.actions

export default filterSlice.reducer