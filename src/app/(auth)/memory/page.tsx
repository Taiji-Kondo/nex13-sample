'use client'

import {ReactNode, Suspense, useState} from "react";
import {Posts} from "@/feature/post/Posts";
import {Loader} from "@/components/loader/Loader";
import {PostType} from "@/types/model/PostType";
import axios from "axios/index";
import {PhotoType} from "@/types/model/PhotoType";
import {AlbumType} from "@/types/model/AlbumType";
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
        <div className={'flex space-x-4'}>
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

        <div>
          {TAB_PANEL[currentTab]}
        </div>
      </Suspense>
    </div>
  )
}

export default Memory