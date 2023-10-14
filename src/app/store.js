import { configureStore} from '@reduxjs/toolkit'
import counterReducer from '../feature/counter/counterSlice'
import postsReducer from '../feature/post/postsSlice'
export const store = configureStore({
    reducer:{
        counters: counterReducer,
        posts: postsReducer,
    }
})