import {useGetPosts} from "@/feature/post/hooks/useGetPosts";

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