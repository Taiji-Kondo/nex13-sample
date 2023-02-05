import axios from "axios";
import {PostType} from "@/types/model/PostType";
import "server-only";

let data: PostType[] | undefined = undefined
export const getPosts = () => {
  if (data === undefined) {
    throw axios.get<PostType[]>('https://jsonplaceholder.typicode.com/posts').then((response) => data = response.data)
  }
  return data
}