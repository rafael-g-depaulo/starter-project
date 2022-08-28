import { useUsers } from "../api/users"

console.log("ENV", process.env, { ...process.env })

export function App() {
  const { data } = useUsers()
  console.log(data)
  return (
    <>
      <p>data:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default App
