import { configureStore} from '@reduxjs/toolkit'
import counterReducer from '../feature/counter/counterSlice'
import postsReducer from '../feature/post/postsSlice'
import UsersReducer from '../feature/users/UsersSlice'
export const store = configureStore({
    reducer:{
        counters: counterReducer,
        posts: postsReducer,
        users:UsersReducer,
    }
})