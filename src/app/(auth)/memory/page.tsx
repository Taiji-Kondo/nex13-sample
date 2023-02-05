import {Photos} from "@/feature/memory/Photos";
import {Albums} from "@/feature/memory/Albums";
import {MemoryTab} from "@/feature/memory/MemoryTab";

const Memory = () => {
  return (
    <div className={'container mx-auto'}>
      <h2 className={'font-bold text-md'}>
        Memory Page
      </h2>
      <MemoryTab initialTab={'photo'} AlbumComponent={<Albums />} PhotoComponent={<Photos />} />
    </div>
  )
}

export default Memory