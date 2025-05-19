import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API_MOVIE_LIST, API_KEY } from '../../constants/api';
import axios from 'axios'

const initialState = {
    movieList: [],
    status: 'idle',
    error: null
}

export const getMovieList = createAsyncThunk('getMovieList', async () => {
    const res = await axios.get(`${API_MOVIE_LIST}?api_key=${API_KEY}`)
    return res.data.results
})

export const movieListSlice = createSlice({
    name: 'movieList',
    initialState,
    reducers: {},
    extraReducers: (builder) => { // HTTP REQUEST
        builder.addCase(getMovieList.pending, (state, action) => {
            state.status = action.meta.requestStatus
        })
        builder.addCase(getMovieList.fulfilled, (state, action) => {
            state.status = action.meta.requestStatus
            state.movieList = action.payload
        })
        builder.addCase(getMovieList.rejected, (state, action) => {
            state.status = action.meta.requestStatus
            state.error = action.error.message
        })
    }
})

export default movieListSlice.reducer