import axios from "axios";

export type PostType = {
  userId: number,
  id: number,
  title: string,
  body: string,
}

let data: PostType[] | undefined = undefined
export const useGetPosts = () => {
  if (data === undefined) {
    throw axios.get<PostType[]>('https://jsonplaceholder.typicode.com/posts').then((response) => data = response.data)
  }
  return data
}