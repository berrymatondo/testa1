import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io.connect("http://51.91.97.19:3041");
//const socket = io.connect("https://jeteste1.herokuapp.com");

function App() {
  const [message, setMessage] = useState("");
  const [messageRec, setMessageRec] = useState("");
  const sendHandler = () => {
    //emit event 2ll
    socket.emit("send_message", { message });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageRec(data.message);
    });
  }, []);
  return (
    <div className="App">
      <input onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendHandler}>Send</button>
      <h1>Message 2 Mich:</h1>
      {messageRec}
    </div>
  );
}

export default App;
