import axios from "axios";
import {AlbumType} from "@/types/model/AlbumType";

let albums: AlbumType[] | undefined = undefined
export const getAlbums = () => {
  if (albums === undefined) {
    throw axios.get<AlbumType[]>('https://jsonplaceholder.typicode.com/albums').then((response) => albums = response.data)
  }
  return albums
}