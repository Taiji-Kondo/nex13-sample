'use client'

import {Suspense, useState} from "react";
import {Post} from "@/feature/post/Post";
import {Loadable} from "@/helpers/Loadable";
import axios from "axios";
import {PostType} from "@/types/model/PostType";
import {notFound} from "next/navigation";
import {Loader} from "@/components/loader/Loader";

const PostDetail = ({params}: {params: {id: number}}) => {
  const id = Number(params.id)
  const getPost = async () => {
    try {
      const response = await axios.get<PostType>(`https://jsonplaceholder.typicode.com/posts/${id}`)
      if (!response.data) throw new Error(`post ${id} is not found`)
      return response.data
    } catch (error) {
      console.error(error)
      notFound()
    }
  }
  const [data] = useState(() => new Loadable(getPost()));

  return (
    <div className={'container mx-auto'}>
      <h2 className={'font-bold text-md'}>
        PostDetail Page
      </h2>


      <Suspense fallback={<Loader />}>
        <Post data={data} />
      </Suspense>
    </div>
  )
}

export default PostDetail