

import {ReactNode} from "react";
import {BaseHeader} from "@/components/header/BaseHeader";
import {HeaderNavigation} from "@/components/navigation/HeaderNavigation";

const TopPageLayout = ({
  children,
}: {
  children: ReactNode
}) => {
  return (
    <body>
      <BaseHeader />
      <main>
        {children}
      </main>
    </body>
  )
}

export default TopPageLayout