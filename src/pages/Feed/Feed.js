import axios, { Axios } from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import PostPreview from '../../components/PostPreview/PostPreview'
import { v4 } from 'uuid'

export default function Feed({ subreddit, setSubreddit, searchTerm, setSearchTerm }) {
    const { data, isLoading, error } = useQuery([`feed/${subreddit}`], () => {
        return axios.get(`https://www.reddit.com/${subreddit}.json`).then(res => res.data)
    })

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <>
            <div className="feed-container">
                {
                    data.data.children
                        .filter(post => {
                            if (!searchTerm) {
                                return true
                            } else {
                                return post.data.title.match(new RegExp(searchTerm, 'gi'))
                            }
                        })

                        .map(post => {
                            const title = post.data.title;
                            const subreddit = post.data.subreddit_name_prefixed;
                            const author = post.data.author;

                            return <PostPreview
                                title={title}
                                author={author}
                                subreddit={subreddit}
                                data={post.data}
                                key={v4()}
                            />
                        })
                }
            </div>
        </>
    )
}
