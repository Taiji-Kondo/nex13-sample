import Link from "next/link";

export const BaseHeader = () => {
  return (
    <header className={'flex items-center h-20 bg-black'}>
      <div className={'container mx-auto'}>
        <Link href={'/'}>
          <h1 className={'text-white font-bold text-xl'}>Next13 Playground</h1>
        </Link>
      </div>
    </header>
  )
}