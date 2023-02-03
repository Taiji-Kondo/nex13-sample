import '@/app/styles/globals.css'

import {ReactNode} from "react";
import {BaseHeader} from "@/components/header/BaseHeader";

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
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
