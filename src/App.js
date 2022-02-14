import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Common/Navbar';
import Save from './features/search/Save';
import Search from './features/search/Search';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/save" element={<Save />} />
      </Routes>
    </div>
  );
}

export default App;
