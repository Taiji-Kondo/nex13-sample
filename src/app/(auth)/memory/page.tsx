'use client'

import {Suspense, useState} from "react";
import {Loader} from "@/components/loader/Loader";
import {Photos} from "@/feature/memory/Photos";
import {Albums} from "@/feature/memory/Albums";

const TAB_PANEL = {
  photo: <Photos />,
  album: <Albums />
}

type TabPanelKeyType = keyof typeof TAB_PANEL

const Memory = () => {
  const [currentTab, setCurrentTab] = useState<TabPanelKeyType>('photo')

  return (
    <div className={'container mx-auto'}>
      <h2 className={'font-bold text-md'}>
        Memory Page
      </h2>

      <Suspense fallback={<Loader />}>
        <div className={'flex'}>
          <button
            className={`p-3 rounded-md text-white ${currentTab === 'photo' ? 'bg-gray-500' : 'bg-gray-300'}`}
            onClick={() => setCurrentTab('photo')}
          >
            PHOTO
          </button>
          <button
            className={`p-3 rounded-md text-white ${currentTab === 'album' ? 'bg-gray-500' : 'bg-gray-300'}`}
            onClick={() => setCurrentTab('album')}
          >
            ALBUM
          </button>
        </div>

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