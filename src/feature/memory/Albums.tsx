import {getAlbums} from "@/feature/memory/api/getAlbums";

export const Albums = () => {
  const data = getAlbums()

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