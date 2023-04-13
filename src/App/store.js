import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counter.slice'
import darkModeReducer from '../features/darkMode/darkModeSlice'
import searchReducer from '@/features/searchSlice/searchSlice'


export default configureStore({
    reducer: {
        counter: counterReducer,
        darkMode: darkModeReducer,
        searchVal: searchReducer
    },
})