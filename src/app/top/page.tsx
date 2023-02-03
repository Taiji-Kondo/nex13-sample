import Link from "next/link";

const Top = () => {
  return (
    <div className={'container mx-auto'}>
      <h2 className={'font-bold text-md'}>
        Top Page
      </h2>
      <div className={'space-x-4 mt-10'}>
        <Link href={'/my-page'} className={'p-3 rounded-md bg-blue-500 text-white'}>MY PAGE</Link>
        <Link href={'/guest'} className={'p-3 rounded-md bg-red-500 text-white'}>GUEST</Link>
      </div>
    </div>
  )
}

export default Top