import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./Components/Navbar";
import { AboutPage } from "./pages/AboutPage";
import { TodosPage } from "./pages/TodosPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route element={<TodosPage />} path="/"></Route>
          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
