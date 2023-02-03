import {ReactNode} from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="jp">
      <head />
      <body>{children}</body>
    </html>
  )
}
