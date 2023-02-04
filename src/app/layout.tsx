import '@/app/styles/globals.css'

import {ReactNode} from "react";

const RootLayout = ({
  children,
}: {
  children: ReactNode
}) => {
  return (
    <html lang="jp">
      <head />
      {children}
    </html>
  )
}

export default RootLayout