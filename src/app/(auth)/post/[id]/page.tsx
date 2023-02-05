'use client'

import {Suspense, useState} from "react";
import {Post} from "@/feature/post/Post";
import {Loadable} from "@/helpers/Loadable";
import axios from "axios";
import {PostType} from "@/types/model/PostType";

const PostDetail = ({params}: {params: {id: number}}) => {
  const id = Number(params.id)
  const getPost = async () => {
    const response = await axios.get<PostType>(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return response.data
  }
  const [data] = useState(() => new Loadable(getPost()));

  return (
    <div className={'container mx-auto'}>
      <h2 className={'font-bold text-md'}>
        PostDetail Page
      </h2>


      <Suspense fallback={<div>Loading...</div>}>
        <Post data={data} />
      </Suspense>
    </div>
  )
}

export default PostDetail