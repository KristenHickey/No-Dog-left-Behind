import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdopterForm from './forms/AdopterForm';
import Preview from './Dogs/Preview'
import UserProvider from './Context/UserProvider';


function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<AdopterForm />} />
          <Route path="/dogs" element={<Preview />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App;
