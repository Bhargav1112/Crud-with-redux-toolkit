import React from 'react'
import { useDispatch } from "react-redux"
import { addPostsAction, updatePostsAction } from '../../../redux/actions/postsAction'
import Modal from '../../UI/Modal'

import "./style.scss"

const NewPost = ({ handleChange, onClose, data, setData, edit, setEditMode }) => {
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!data.title.trim() || !data.author.trim()) return;

    if (edit) {
      console.log(edit);
      console.log("data", data);
      dispatch(updatePostsAction({ ...edit, title: data.title, author: data.author }))
    } else {
      const finalData = {
        id: Math.floor(Math.random() * 1000),
        ...data
      }
      dispatch(addPostsAction(finalData))
    }

    setData({ title: '', author: "" })
    onClose()
    setEditMode(null)
  }
  return (
    <Modal onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <div className="control">
          <label htmlFor="title">Post:</label>
          <textarea className='input' value={data.title} onChange={handleChange} onBlur={handleChange} name="title" id="title" placeholder='message' ></textarea>
        </div>
        <div className="control">
          <label htmlFor="author">Author Name:</label>
          <input type="text" className='input' id="author" value={data.author} onChange={handleChange} onBlur={handleChange} name='author' placeholder='Author name' />
        </div>
        <button type='submit' className='add-btn'>{edit ? "Update" : "Add"}</button>
        <button type='button' onClick={onClose} className='add-btn'>Cancel</button>
      </form>
    </Modal>
  )
}

export default NewPost