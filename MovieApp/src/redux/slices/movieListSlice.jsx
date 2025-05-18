import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API_MOVIE_LIST, API_KEY } from '../../constants/api';
import axios from 'axios'

const initialState = {
    movieList: [],
}

export const getMovieList = createAsyncThunk('getMovieList', async () => {
    const res = await axios.get(`${API_MOVIE_LIST}?api_key=${API_KEY}`)
    return res.data.results
})

export const movieListSlice = createSlice({
    name: "movieList",
    initialState,
    reducers: {},
    extraReducers: (builder) => { // HTTP REQUEST
        builder.addCase(getMovieList.fulfilled, (state, action) => {
            state.movieList = action.payload
        })

    }
})

export default movieListSlice.reducer