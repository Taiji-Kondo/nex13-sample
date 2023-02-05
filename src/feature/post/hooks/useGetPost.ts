import axios from "axios";
import {PostType} from "@/types/model/PostType";

let data: PostType | undefined = undefined
export const useGetPost = (id: number) => {
  if (data === undefined) {
    throw axios.get<PostType>(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response) => data = response.data)
  }
  return data
}