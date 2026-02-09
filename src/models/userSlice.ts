import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { api } from '../utilities/api'

interface UserState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error?: string
  accessToken?: string
  refreshToken?: string
  email?: string
  isEmailVerified?: boolean
  username?: string
  avatarUrl?: string
}

const initialState: UserState = {
  status: 'idle',
  error: undefined,
  accessToken: undefined,
  refreshToken: undefined,
  email: undefined,
  isEmailVerified: undefined,
  username: undefined,
  avatarUrl: undefined
}

export const loginUser = createAsyncThunk<any, any>(
  'user/login',
  async ({ username, password }) => {
    try {
      const response = await api.post("/users/login", { username, password })
      return response.data?.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.message || 'Failed to login user')
      }
      throw new Error('An unknown error occurred')
    }
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser: (state) => {
      state.status = 'idle'
      state.error = undefined
      state.accessToken = undefined
      state.refreshToken = undefined
      state.email = undefined
      state.isEmailVerified = undefined
      state.username = undefined
      state.avatarUrl = undefined
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading'
        state.error = undefined
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.accessToken = action.payload?.accessToken
        state.refreshToken = action.payload?.refreshToken
        state.email = action.payload?.user?.email
        state.isEmailVerified = action.payload?.user?.isEmailVerified
        state.username = action.payload?.user?.username
        state.avatarUrl = action.payload?.user?.avatar?.url
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Something went wrong'
      })
  },
})

export const { clearUser } = userSlice.actions

export default userSlice.reducer