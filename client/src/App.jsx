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
      <h1>React & Node.js</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
