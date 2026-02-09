import { combineReducers, configureStore } from "@reduxjs/toolkit"
import userSlice from "./models/userSlice"

export const store = configureStore({
    reducer: combineReducers({
        user: userSlice
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch