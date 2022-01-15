import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdopterForm from './adopter/AdopterForm';
import Preview from './Dogs/Preview'
import UserProvider from './Context/UserProvider';
import DogProfile from './Dogs/DogProfile';
import ProfilePage from './adopter/ProfilePage';


function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<AdopterForm />} />
          <Route path="/dogs/" element={<Preview />} />
          <Route path="/dog/:id" element={<DogProfile />} />
          <Route path="/profile/:id" element={<ProfilePage />}></Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App;
