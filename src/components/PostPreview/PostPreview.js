import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/PostPreview.css'
import Media from '../Media/Media'

export default function PostPreview({ title, author, data }) {

  return (
    <Link
    className="post-preview"
    to={`/comments/${encodeURIComponent(data.permalink)}`}>
      {
        window.innerWidth > 800 ? <Media post={data}></Media> :
        
        data.thumbnail && data.thumbnail !== 'default' &&
        <img src={data.thumbnail} alt="" />
      }
      <p className='title'>{title}</p>
    </Link>
  )
}