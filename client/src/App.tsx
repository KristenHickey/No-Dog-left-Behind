import React from 'react';
import './App.less';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdopterForm from './adopter/AdopterForm';
import Preview from './Dogs/Preview';
import UserProvider from './Context/UserProvider';
import DogProfile from './Dogs/DogProfile';
import ProfilePage from './adopter/ProfilePage';
import BottomMenu from './Common/BottomMenu';
import Banner from './Common/Banner';
import FavouritesPage from './Dogs/FavouritesPage';
import LoginPage from './Login/LoginPage';


const App: React.FC =() => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Banner />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/createAccount" element={<AdopterForm />} />
          <Route path="/home/" element={<Preview />} />
          <Route path="/dog/:id" element={<DogProfile />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
        <BottomMenu />
      </UserProvider>
    </BrowserRouter>
  )
}

export default App;
