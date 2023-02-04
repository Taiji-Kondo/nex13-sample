import {Suspense} from "react";
import {PostList} from "@/feature/post/PostList";

const Post = () => {
  return (
    <div className={'container mx-auto'}>
      <h2 className={'font-bold text-md'}>
        Post Page
      </h2>


      <Suspense fallback={<div>Loading...</div>}>
        <PostList />
      </Suspense>
    </div>
  )
}

export default Post