import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("https://web-social-media-production.up.railway.app/")
      .then(res => setMessage(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Quang Tí nói là:</h2>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
