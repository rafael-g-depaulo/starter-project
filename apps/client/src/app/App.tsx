import { useTestSingleton } from "../api/test-singleton"
import { useUsers } from "../api/users"

console.log("ENV", process.env, { ...process.env })

export function App() {
  const { data } = useUsers()
  const { data: strapiData } = useTestSingleton()

  return (
    <>
      <p>data from API:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <p>data from STRAPI:</p>
      <pre>{JSON.stringify(strapiData?.data.attributes, null, 2)}</pre>
    </>
  )
}

export default App
