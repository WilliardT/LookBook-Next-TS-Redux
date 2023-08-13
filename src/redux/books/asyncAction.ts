
//  TODO: убрать ключ в переменные окружения
const key = 'AIzaSyCYnWJXYX7bcgvm8LuQobk4PZKbzcywqgQ'


import {createAsyncThunk} from "@reduxjs/toolkit";
import {Book, fetchBooksArgs} from "@/redux/books/types";

export const fetchBooksData = createAsyncThunk<Book[], fetchBooksArgs>(
    'books/fetchBooksData', async (params: fetchBooksArgs, thunkAPI
    ) => {
    const { title, category, countFetch, sortOrder } = params;
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?startIndex=${countFetch}&maxResults=30&q=${title}${category}&orderBy=${sortOrder}&key=${key}`
    );
    const data = await response.json();

    if (data.length === 0) {
        return thunkAPI.rejectWithValue('Ошибка получения данных');
    }

    return thunkAPI.fulfillWithValue(data)
})