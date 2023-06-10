// Necessary Requires
const express = require("express");
const app = express();
const port = 3001;
const http = require("http");
const authRoutes = require("./routes/userRoutes");

const { Server } = require("socket.io");
const cors = require("cors");
require("./db/db");

app.use(cors());
app.use(express.json());

const server = http.createServer(app);

// Server for socket connection
const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:5173",
    methods: ["GET", "POST"],
  },
});

// Socket event listener
io.on("connection", (socket) => {
  //Client connected
  console.log(socket.id + ` a client is connected`);

  let counter = 0;
  //Messages to be sent to client
  let messagesMockup = [
    "Hello There👋🏻",
    `I'm Wysa, an AI chatbot built by therapists.`,
    `I'm here to listen to you and help you feel better.`,
    `I'm not a therapist, but I can help you with some tools to feel better. `,
    `Can I help?`,
    `../assets/react.svg`,
  ];
  // Send message to client after 1 second
  const sendMessageWithDelay = () => {
    setTimeout(function () {
      console.log("Sending message to client");
      socket.emit("message", messagesMockup[counter]);
      counter++;

      if (counter < 5) {
        sendMessageWithDelay();
      }
    }, 1000);
  };

  sendMessageWithDelay();
});


//Authenticating routes
app.use("/auth", authRoutes);

// Socket connection Listener
io.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Server connection Listener
app.listen(3000, () => {
  console.log(`Listening on port ${port}`);
});
