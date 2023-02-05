import {Suspense} from "react";
import {Posts} from "@/feature/post/Posts";

const Post = () => {
  return (
    <div className={'container mx-auto'}>
      <h2 className={'font-bold text-md'}>
        Post Page
      </h2>


      <Suspense fallback={<div>Loading...</div>}>
        <Posts />
      </Suspense>
    </div>
  )
}

export default Post