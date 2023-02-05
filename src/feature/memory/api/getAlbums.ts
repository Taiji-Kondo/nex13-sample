import axios from "axios";
import {AlbumType} from "@/types/model/AlbumType";
import "server-only";

let albums: AlbumType[] | undefined = undefined
export const getAlbums = () => {
  if (albums === undefined) {
    throw new Promise((resolve) => setTimeout(resolve, 3000)).then(() => {
      return axios.get<AlbumType[]>('https://jsonplaceholder.typicode.com/albums').then((response) => albums = response.data)
    });
    // throw axios.get<AlbumType[]>('https://jsonplaceholder.typicode.com/albums').then((response) => albums = response.data)
  }
  return albums
}