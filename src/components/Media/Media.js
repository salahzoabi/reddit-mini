import React from 'react'

export default function Media({ post }) {
    if (post?.post_hint === 'image') {
        return (
            <div className='media'>
                <img src={post.url} alt={post.id} onClick={handleClick}/>
            </div>
        );
    }

    if (post?.post_hint === 'rich:video') {
        return (
            <div className='media'>
                <video loop autoPlay>
                    <source src={post.url} type='video/mp4'></source>
                </video>
            </div>
        );
    }

    if (post?.post_hint === 'rich:iframe') {
        return (
            <div className='media'>
                <iframe
                    src={post.url}
                    title={post.title}
                    allowFullScreen
                    allow='autoplay'
                />
            </div>
        );
    }

    if (post?.post_hint === 'hosted:video') {
        return (
            <div className='media'>
                <iframe
                    src={post.media.reddit_video.fallback_url}
                    title={post.title}
                    allowFullScreen
                    allow='autoplay'
                    height={post.media.reddit_video.height}
                />
            </div>
        );
    }

    if (post?.gallery_data) {
        return (
            <div className='media'>
                <a href={post.url} target='_blank' rel='noreferrer'>
                    <img src={post.thumbnail} alt='gif' height='400px'></img>
                </a>
            </div>
        );
    }

    return <div></div>
}

const handleClick = (e) => {
    e.target.parentElement.classList.toggle('fullscreen')
}

