import SocketClient from "./Components/SocketClient";
import Login from "./Components/Login";
import React, { useEffect, useState } from "react";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  NavLink,
} from "react-router-dom";
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";

function App() {
  // logged in state
  const [loggedIn, setLoggedIn] = useState(false);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Navbar logged={loggedIn} setLogged={setLoggedIn} />}>
        <Route
          index
          element={<Login setLogged={setLoggedIn} logged={loggedIn} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<SocketClient />} />,
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
