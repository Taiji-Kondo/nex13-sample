import {Loadable} from "@/helpers/Loadable";
import {PostType} from "@/types/model/PostType";

/**
 * render-as-your-fetch pattern
 **/

export const Post = ({data}: { data: Loadable<PostType> }) => {
  const post = data.getOrThrow()

  return (
    <div>
      <h2>
        {post.title}
      </h2>
      <p>{post.body}</p>
    </div>
  )
}