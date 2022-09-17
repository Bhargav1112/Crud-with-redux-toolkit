import { addPostsRequest, deletePostsRequest, getPostsRequest, updatePostsRequest } from "../../common/api/postServises"
import { postActions } from "../slices/postSlice"

export const fetchPostsAction = () => {
  return async (dispatch) => {
    try {
      dispatch(postActions.loadingState())
      setTimeout(async () => {
        const res = await getPostsRequest()
        dispatch(postActions.replacePost(res.data))
      }, 2000)
    } catch (error) {
      dispatch(postActions.errorState(error.message))
    }
  }
}

export const addPostsAction = data => {
  return async (dispatch) => {
    try {
      dispatch(postActions.loadingState())
      setTimeout(async () => {
        const res = await addPostsRequest(data)
        console.log(res);
        dispatch(postActions.addPost(data))
      }, 2000)
    } catch (error) {
      dispatch(postActions.errorState(error.message))
    }
  }
}

export const deletePostsAction = id => {
  return async (dispatch) => {
    try {
      dispatch(postActions.loadingState())
      setTimeout(async () => {
        const res = await deletePostsRequest(id)
        console.log(res);
        dispatch(postActions.deletePost(id))
      }, 2000)
    } catch (error) {
      dispatch(postActions.errorState(error.message))
    }
  }
}

export const updatePostsAction = data => {
  return async (dispatch) => {
    try {
      dispatch(postActions.loadingState())
      setTimeout(async () => {
        const res = await updatePostsRequest(data)
        console.log(res);
        dispatch(postActions.updatePost(data))
      }, 2000)
    } catch (error) {
      dispatch(postActions.errorState(error.message))
    }
  }
}