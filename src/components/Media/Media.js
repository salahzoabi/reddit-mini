import React from 'react'

export default function Media({ post }) {
    if (post?.post_hint === 'image') {
        return (
            <div className='media'>
                <img src={post.url} onClick={handleClick}/>
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

const openFullscreen = e => {
    if (e.requestFullscreen) {
        e.requestFullscreen();
    } else if (e.mozRequestFullScreen) {
        e.mozRequestFullScreen();
    } else if (e.msRequestFullscreen) {
        e.msRequestFullscreen();
    }
}

const closeFullscreen = () => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

const fs_status = () => {
    if (document.fullscreenElement ||
        document.msFullscreenElement ||
        document.mozFullScreenElement) {
        return true;
    }
    else {
        return false;
    }
}

const handleClick = (e) => {
    fs_status() ? closeFullscreen(e.target) : openFullscreen(e.target)
}
