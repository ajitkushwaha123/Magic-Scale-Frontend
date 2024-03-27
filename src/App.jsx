import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './Pages/Home'
import { Form } from './components/Form'

//https://template.wphix.com/printx-prv/printx/index.html

function App() {

  return (
    <>
      <Home />
      <Form />
    </>
  )
}

export default App
