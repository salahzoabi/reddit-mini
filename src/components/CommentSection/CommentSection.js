import React from 'react'
import Comment from '../Comment/Comment.js'
import '../../assets/CommentSection.css'
import { v4 } from 'uuid'

export default function CommentSection({ data }) {
  return (
    <>
      <div className="comments-container">
        {
          data.map(comment => <Comment data={comment.data} key={v4()}></Comment>)
        }
      </div>
    </>
  )
}
