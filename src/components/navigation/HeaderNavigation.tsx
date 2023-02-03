import Link from "next/link";

export const HeaderNavigation = () => {
  return (
    <nav className={'bg-gray-500 h-10'}>
      <ul className={'flex items-center justify-around h-full'}>
        <li>
          <Link href={'/'} className={'underline text-white'}>TOP</Link>
        </li>
        <li>
          <Link href={'/post'} className={'underline text-white'}>POST</Link>
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