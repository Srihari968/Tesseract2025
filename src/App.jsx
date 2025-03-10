import Views from "./Views";
import React, { useEffect, useState} from "react";
import { View } from "@react-three/drei";
import Loader from "./Components/Loader/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Tesseract 2025";
  }, []);
  return (
    <div>
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <Views />
      )}
    </div>
  );
};

export default App;