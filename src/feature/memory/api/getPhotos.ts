import {PhotoType} from "@/types/model/PhotoType";
import axios from "axios";
import "server-only";

let photos: PhotoType[] | undefined = undefined
export const getPhotos = () => {
  if (photos === undefined) {
    throw axios.get<PhotoType[]>('https://jsonplaceholder.typicode.com/photos').then((response) => photos = response.data)
  }
  return photos
}