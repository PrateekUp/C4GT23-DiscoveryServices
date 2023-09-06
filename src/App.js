import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage";
import Booking from "./pages/booking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details/:roomId" Component={Booking}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
