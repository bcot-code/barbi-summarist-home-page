import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
})
