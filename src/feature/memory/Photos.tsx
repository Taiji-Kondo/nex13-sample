import {getPhotos} from "@/feature/memory/api/getPhotos";

export const Photos = () => {
  const data = getPhotos()

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  )
}