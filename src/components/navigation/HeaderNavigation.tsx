import Link from "next/link";

export const HeaderNavigation = () => {
  return (
    <nav className={'bg-gray-500 h-10'}>
      <ul className={'flex items-center justify-around h-full'}>
        <li>
          <Link href={'/my-page'} className={'underline text-white'}>MY PAGE</Link>
        </li>
        <li>
          <Link href={'/post'} className={'underline text-white'}>POST</Link>
        </li>
        <li>
          <Link href={'/memory'} className={'underline text-white'}>MEMORY</Link>
        </li>
        <li>
          <div className={'text-white'}>ABOUT</div>
        </li>
        <li>
          <div className={'text-white'}>CONTACT</div>
        </li>
      </ul>
    </nav>
  )
}