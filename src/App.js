import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import "slick-carousel/slick/slick.css";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element= {<Home />} />
     
    </Routes>
    </BrowserRouter>
  );
}

export default App;
