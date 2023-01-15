import React from 'react'
import { v4 } from 'uuid'
import Comment from '../Comment/Comment'

export default function Replies({data}) {
  return (
    <div className="replies">
        {
          data.map(comment => <Comment data={comment.data} key={v4()}></Comment>)
        }
    </div>
  )
}
