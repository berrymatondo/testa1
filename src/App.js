import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";

//const socket = io.connect("http://localhost:3001");
const socket = io.connect("https://jeteste1.herokuapp.com");

function App() {
  const [message, setMessage] = useState("");
  const [messageRec, setMessageRec] = useState("");
  const sendHandler = () => {
    //emit event
    socket.emit("send_message", { message });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageRec(data.message);
    });
  }, [socket]);
  return (
    <div className="App">
      <input onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendHandler}>Send</button>
      <h1>Message:</h1>
      {messageRec}
    </div>
  );
}

export default App;
