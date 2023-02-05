'use client'

import {Suspense, useState, useTransition} from "react";
import {Loader} from "@/components/loader/Loader";
import {Photos} from "@/feature/memory/Photos";
import {Albums} from "@/feature/memory/Albums";

const TAB_PANEL = {
  photo: <Photos />,
  album: <Albums />
}

type TabPanelKeyType = keyof typeof TAB_PANEL

const Memory = () => {
  const [isPending, startTransition] = useTransition()
  const [currentTab, setCurrentTab] = useState<TabPanelKeyType>('photo')

  const onClickTab = (tab: TabPanelKeyType) => {
    startTransition(() => {
      setCurrentTab(tab)
    })
  }

  return (
    <div className={'container mx-auto'}>
      <h2 className={'font-bold text-md'}>
        Memory Page
      </h2>

      <div className={'flex'}>
        <button
          className={`p-3 rounded-md text-white ${currentTab === 'photo' ? 'bg-gray-500' : 'bg-gray-300'} ${isPending ? 'opacity-50' : ''}`}
          onClick={() => onClickTab('photo')}
          disabled={isPending}
        >
          PHOTO
        </button>
        <button
          className={`p-3 rounded-md text-white ${currentTab === 'album' ? 'bg-gray-500' : 'bg-gray-300'} ${isPending ? 'opacity-50' : ''}`}
          onClick={() => onClickTab('album')}
          disabled={isPending}
        >
          ALBUM
        </button>
      </div>

      <Suspense fallback={<Loader />}>
        <div className={'border-2 p-3'}>
          <h3 className={'text-md font-bold'}>
            {currentTab}
          </h3>
          {TAB_PANEL[currentTab]}
        </div>
      </Suspense>
    </div>
  )
}

export default Memory