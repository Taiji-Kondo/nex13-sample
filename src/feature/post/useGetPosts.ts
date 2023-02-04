import axios from "axios";

type Post = {
  userId: number,
  id: number,
  title: string,
  body: string,
}

let data: Post[] | undefined = undefined
export const useGetPosts = () => {
  if (data === undefined) {
    throw axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts').then((response) => data = response.data)
  }
  return data
}