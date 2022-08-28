import { PropsWithChildren } from "react"
import { QueryClient, QueryClientProvider } from "react-query"

export const queryClient = new QueryClient()

export const ReactQueryProvider = ({ children }: PropsWithChildren) => {
  console.log(queryClient)
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
