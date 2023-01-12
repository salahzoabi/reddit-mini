import React from 'react'

export default function Comment({ data }) {
    return (
        <>
            <div className="comment">
                <span className='author'>{data.author}</span>
                <p className="body">{data.body}</p>
            </div>
        </>
    )
}
