import Views from "./Views"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    document.title = "Tesseract 2025"
 }, []);
  return (
    <>
      <Views />
    </>
  )
}

export default App