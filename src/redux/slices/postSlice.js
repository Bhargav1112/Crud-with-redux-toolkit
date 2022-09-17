import { createSlice } from "@reduxjs/toolkit"

const postSlice = createSlice({
  name: "post",
  initialState: {
    loading: false,
    error: '',
    posts: []
  },
  reducers: {
    addPost(state, action) {
      state.loading = false
      state.error = ''
      state.posts.push(action.payload)
    },
    deletePost(state, action) {
      state.loading = false
      state.error = ''
      state.posts = state.posts.filter(post => post.id !== action.payload)
    },
    updatePost(state, action) {
      state.loading = false
      state.error = ''
      state.posts = state.posts.map(post => post.id === action.payload.id ? action.payload : post)
    },
    replacePost(state, action) {
      state.loading = false
      state.error = ''
      state.posts = action.payload
    },
    loadingState(state, action) {
      state.loading = true
    },
    errorState(state, action) {
      state.error = action.payload
    }
  }
})

export const postActions = postSlice.actions

export default postSlice