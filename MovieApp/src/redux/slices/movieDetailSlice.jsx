import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API_KEY, API_MOVIE_DETAIL } from '../../constants/api';
import axios from 'axios'

const initialState = {
    movieDetail: {},
    status: 'idle',
    error: null
}

export const getMovieDetailById = createAsyncThunk('getMovieDetailById', async (id) => {
    const res = await axios.get(`${API_MOVIE_DETAIL}/${id}?api_key=${API_KEY}`)
    return res.data
})

export const movieDetailSlice = createSlice({
    name: 'movieDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => { // HTTP REQUEST
        builder.addCase(getMovieDetailById.fulfilled, (state, action) => {
            state.movieDetail = action.payload
        })
    }
})

export default movieDetailSlice.reducer