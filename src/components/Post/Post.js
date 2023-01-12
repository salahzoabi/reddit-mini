import { faArrowsUpDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import '../../assets/Post.css'
import Media from '../Media/Media';

export default function Post({ data }) {
  return (
    <>
      <div className="post-container">
        <Media post={data}></Media>
        <div className="post-info">
          <a href={data.url}><h2 className="title">{data.title}</h2></a>
          <span className="upvotes"><FontAwesomeIcon icon={faArrowsUpDown} />{data.ups}</span>
        </div>
      </div>
    </>
  )
}
