import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Pages/Layout.jsx';
import Hero from './components/Hero.jsx';
import Home from './Pages/Home.jsx';
import { Form } from './components/Form.jsx';
import Register from './components/Registration.jsx';
import Login from './components/Login.jsx';

const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/form' element={<Form />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)