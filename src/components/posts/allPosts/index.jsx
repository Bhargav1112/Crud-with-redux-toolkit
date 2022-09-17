import React, { Fragment, useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { deletePostsAction, fetchPostsAction } from '../../../redux/actions/postsAction'
import NewPost from '../newPost'
import Post from '../post'
import "./style.scss"

const Posts = () => {
  const postsState = useSelector(state => state.post)
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false)
  const [postData, setPostData] = useState({ title: '', author: "" })
  const [editMode, setEditMode] = useState(null)

  const handleChange = e => {
    const { name, value } = e.target
    setPostData({ ...postData, [name]: value })
  }

  const handleAddPost = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setPostData({ title: "", author: "" })
  }

  const handleEdit = (data) => {
    setShowModal(true)
    setEditMode(data)
    setPostData({ title: data.title, author: data.author })
  }
  const handleDelete = (id) => {
    dispatch(deletePostsAction(id))
  }

  useEffect(() => {
    dispatch(fetchPostsAction())
  }, [dispatch])

  return (
    <Fragment>
      <div className='addPostBtn'>
        <button type='button' onClick={handleAddPost}>Add new post</button>
      </div>
      {postsState.loading ?
        <h4 className='loading'>Loading...</h4>
        :
        postsState.error ?
          <h4 className='error'>{postsState.error}</h4>
          :
          (
            <ul className='postList'>
              {postsState.posts.map(post => {
                return (
                  <Post key={post.id} post={post} handleEdit={handleEdit} handleDelete={handleDelete} />
                )
              })}
            </ul>
          )
      }
      {showModal &&
        <NewPost
          setData={setPostData}
          handleChange={handleChange}
          edit={editMode}
          setEditMode={setEditMode}
          data={postData}
          onClose={handleCloseModal}
        />}
    </Fragment>
  )
}

export default Posts