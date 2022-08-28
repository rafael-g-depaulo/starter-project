import { PropsWithChildren } from "react"
import { ReactQueryProvider } from "./queryClient"

export const GlobalContext = ({ children }: PropsWithChildren) => (
  <ReactQueryProvider>{children}</ReactQueryProvider>
)
