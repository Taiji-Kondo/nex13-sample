import Link from "next/link";
import {getPosts} from "@/feature/post/api/getPosts";

/**
 * fetch-on-render pattern
 **/

export const Posts = () => {
  const data = getPosts()

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