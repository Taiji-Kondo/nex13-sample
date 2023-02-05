import {Suspense} from "react";
import {Post} from "@/feature/post/Post";

const PostDetail = ({params}: {params: {id: number}}) => {
  return (
    <div className={'container mx-auto'}>
      <h2 className={'font-bold text-md'}>
        PostDetail Page
      </h2>


      <Suspense fallback={<div>Loading...</div>}>
        <Post id={Number(params.id)} />
      </Suspense>
    </div>
  )
}

export default PostDetail