import {Suspense} from "react";
import {Posts} from "@/feature/post/Posts";
import {Loader} from "@/components/loader/Loader";

const Post = () => {
  return (
    <div className={'container mx-auto'}>
      <h2 className={'font-bold text-md'}>
        Post Page
      </h2>


      <Suspense fallback={<Loader />}>
        <Posts />
      </Suspense>
    </div>
  )
}

export default Post