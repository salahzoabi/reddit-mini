import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Post from '../../components/Post/Post'
import CommentSection from '../../components/CommentSection/CommentSection'
import BounceLoader from 'react-spinners/BounceLoader'

export default function Comments() {
  const { permalink } = useParams()

  const { data, isLoading, error } = useQuery([`comments/${permalink}`], () => {
    return axios.get(`https://www.reddit.com/${permalink}.json`).then(res => res.data)
  })

  if (isLoading) return (
    <div className="spinner">
      <BounceLoader loading={true} size={150} color={getComputedStyle(document.documentElement).getPropertyValue('--secondary-clr')} />
    </div>
  )

  if (error) return 'An error has occurred: ' + error.message

  return (
    <>
      <Post data={data[0].data.children[0].data}></Post>
      <CommentSection data={data[1].data.children}></CommentSection>
    </>
  )
}
