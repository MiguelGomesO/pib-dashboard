import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Tabela from "./pages/Tabela";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav class="bg-gradient-to-r from-blue-800 to-blue-600 p-4 flex justify-between items-center shadow-lg">
          <div class="text-2xl text-white font-bold">PIB Dashboard</div>
          <div class="flex gap-6">
            <Link to="/" class="text-white text-lg hover:underline hover:text-blue-200">Gráfico PIB</Link>
            <Link to="/tabela" class="text-white text-lg hover:underline hover:text-blue-200">Tabela PIB</Link>
          </div>
        </nav>
        <div class="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tabela" element={<Tabela />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
