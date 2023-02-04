import {useGetPosts} from "@/feature/post/useGetPosts";

export const PostList = () => {
  const data = useGetPosts()

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}