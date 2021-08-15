import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
// eslint-disable-next-line import/extensions
import authReducer from './Authslice'
// eslint-disable-next-line import/extensions
import playlistReducer from './playlists'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const store = configureStore({
  reducer: {
    auth: authReducer,
    playlist: playlistReducer
  }
})

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
