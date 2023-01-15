import { faArrowUp, faReply } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Replies from '../Replies/Replies'

export default function Comment({ data }) {
    if (!data.body) return (<div></div>)
    return (
        <>
            <div className="comment" onClick={e => {
                e.stopPropagation()
                e.target.closest('.comment').classList.toggle('expanded')
            }}>
                <div className="comment-main">
                    <span className='author'>{data.author}</span>
                    <p className="body">{data.body}</p>
                </div>
                <div className="post-stats">
                    <div className="ups-count">
                        <div><FontAwesomeIcon icon={faArrowUp} />{data.ups || 0}</div>
                    </div>
                    <div className="reply-count">
                        <div><FontAwesomeIcon icon={faReply} />{data.replies?.data?.children?.length || 0}</div>
                    </div>
                </div>
                {data.replies && <Replies data={data.replies.data.children} />}
            </div>
        </>
    )
}
