import Chat from "./Chat";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [message, setMessage] = useState([]);
  const navigate = useNavigate();

  // setting title of the page
  useEffect(() => {
    document.title = "Wysa";
    if (!localStorage.getItem("token")) {
      navigate("/");
    } else {
      // connecting to the socket
      let socket = io.connect("http://localhost:3001");
      socket.emit("send_message", "Hello");
      socket.on("message", (msg) => {
        setMessage((prevState) => [...prevState, msg]);
      });
    }
  }, []);

  return (
    <div>
      <Chat message={message} />
      <ToastContainer />
    </div>
  );
}

export default App;
