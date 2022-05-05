import React from 'react';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { ProfileMain } from './pages/profileMain/profileMain';
import { RestaurantsMain } from './pages/restaurantsMain/restaurantsMain';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/register" element = {<Register />}/>
        <Route path = "/login" element = {<Login />}/>
        <Route path = "/restaurants" element = {<RestaurantsMain />}/>
        <Route path = "/profile" element = {<ProfileMain />}/>
      </Routes>
    </Router>
  );
}
