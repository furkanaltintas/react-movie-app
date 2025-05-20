import { createSlice } from '@reduxjs/toolkit'
import { getItemFromStorage, removeItemToStorage, setItemToStorage } from '../storage/storageService'

const initialState = {
    favoriteMovies: getItemFromStorage('favorites')
}

export const favoriteSlice = createSlice({
    name: 'favoriteSlice',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            const findMovie = state.favoriteMovies?.some((movie) => movie.id === action.payload.id)
            if (!findMovie) {
                state.favoriteMovies = [...state.favoriteMovies, action.payload]
                setItemToStorage('favorites', state.favoriteMovies)
            }
        },

        removeFavorite: (state, action) => {
            const filteredMovies = state.favoriteMovies?.filter((movie) => movie.id !== action.payload.id)
            state.favoriteMovies = filteredMovies
            setItemToStorage('favorites', state.favoriteMovies)
        },

        removeAllFavorite: (state) => {
            state.favoriteMovies = []
            removeItemToStorage('favorites')
        }
    },
})

export const { addFavorite, removeFavorite, removeAllFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer


// Apiye istek atmayacağımız zaman reducers yapısının içerisinde oluşturmamız gerekiyor.
// ... => var olan bir dizinin veya nesnenin tamamını veya bir kısmını başka bir diziye veya nesneye hızlı bir şekilde kopyalamamızı sağlar