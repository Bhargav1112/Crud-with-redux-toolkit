import React from 'react'

import "./style.scss"

const Post = ({ post, handleDelete, handleEdit }) => {
  return (
    <li className='post-wrapper'>
      <div className="content">
        <h4 className='post-text'>{post.title}</h4>
        <p className='author'>{post.author}</p>
      </div>
      <div className="action">
        <button type="button" className='edit-btn' onClick={handleEdit.bind(null, post)}>Edit</button>
        <button type="button" className='delete-btn' onClick={handleDelete.bind(null, post.id)}>Delete</button>
      </div>
    </li>
  )
}

export default Post