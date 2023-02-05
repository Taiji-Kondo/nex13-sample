'use client'

import {ReactElement, Suspense, useState, useTransition} from "react";
import {Loader} from "@/components/loader/Loader";

type TabPanelKeyType = 'photo' | 'album'

type MemoryTabPropsType = {
  initialTab?: TabPanelKeyType
  PhotoComponent: ReactElement
  AlbumComponent: ReactElement
}

export const MemoryTab = ({initialTab, PhotoComponent, AlbumComponent}: MemoryTabPropsType) => {
  const [isPending, startTransition] = useTransition()
  const [currentTab, setCurrentTab] = useState<TabPanelKeyType>(initialTab ?? 'photo')

  const onClickTab = (tab: TabPanelKeyType) => {
    startTransition(() => {
      setCurrentTab(tab)
    })
  }

  return (
    <>
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
          {currentTab === 'photo' && PhotoComponent}
          {currentTab === 'album' && AlbumComponent}
        </div>
      </Suspense>
    </>
  )
}