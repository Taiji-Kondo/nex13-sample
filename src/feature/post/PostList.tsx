import {useGetPosts} from "@/feature/post/hooks/useGetPosts";
import Link from "next/link";

/**
 * fetch-on-render pattern
 **/

export const PostList = () => {
  const data = useGetPosts()

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>
          <Link href={`/post/${post.id}`}>
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}