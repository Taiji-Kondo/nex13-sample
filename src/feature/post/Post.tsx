import {useGetPost} from "@/feature/post/hooks/useGetPost";

type PostDetailType = {
  id: number
}

export const Post = ({id}: PostDetailType) => {
  const data = useGetPost(id)

  return (
    <div>
      <h2>
        {data.title}
      </h2>
      <p>{data.body}</p>
    </div>
  )
}