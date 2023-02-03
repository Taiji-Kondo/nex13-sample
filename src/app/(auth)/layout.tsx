import '@/app/styles/globals.css'

import {ReactNode} from "react";
import {BaseHeader} from "@/components/header/BaseHeader";
import {HeaderNavigation} from "@/components/navigation/HeaderNavigation";

const AuthLayout =({
  children,
}: {
  children: ReactNode
}) => {
  return (
    <body>
      <BaseHeader />
      <HeaderNavigation />
      <main>
        {children}
      </main>
    </body>
  )
}

export default AuthLayout