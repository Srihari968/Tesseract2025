import Views from "./Views"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    document.title = "Parsec 2025"
 }, []);
  return (
    <>
      <Views />
    </>
  )
}

export default App