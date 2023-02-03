import '@/app/styles/globals.css'

import {ReactNode} from "react";
import {BaseHeader} from "@/components/header/BaseHeader";
import {HeaderNavigation} from "@/components/navigation/HeaderNavigation";

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="jp">
      <head />
      <body>
        <BaseHeader />
        <HeaderNavigation />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
