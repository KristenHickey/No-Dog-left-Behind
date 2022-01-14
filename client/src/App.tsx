import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdopterForm from './forms/AdopterForm';
import Preview from './Dogs/Preview'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdopterForm />} />
        <Route path="/dogs" element={<Preview />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
