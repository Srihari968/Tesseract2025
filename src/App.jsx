import TesseractLoader from "./Components/TesseractLoader";
import Views from "./Views"
import { useState, useEffect } from "react"

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    document.title = "Tesseract 2025"
    
    // Simulate loading time (you can replace this with actual data loading)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Show loader for 2.5 seconds
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      {loading ? (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f5f5f5',
          zIndex: 1000
        }}>
          <div style={{ textAlign: 'center' }}>
            <TesseractLoader size={1000} color="#3498db" thickness={4} />
            <h2 style={{ marginTop: 20, fontFamily: 'sans-serif' }}>Loading Tesseract 2025...</h2>
          </div>
        </div>
      ) : (
        <Views />
      )}
    </>
  )
}

export default App