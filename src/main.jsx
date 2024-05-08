import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes, Form } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { UserAuthContextProvider } from './context/UserAuthContext.jsx';
import Home from './Pages/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Registration.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <Router>
        <Routes>
          <Route path='/' 
          element={
            <>
              <Home />
            </>
          }/>
          <Route path='/profile' 
          element={
            <ProtectedRoute>
            <> 
              {/* <Navbar />
              <Profile />
              <Footer /> */}
            </>
            </ProtectedRoute>
          }/>
          {/* <Route path='/' element={<Layout />} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {/* <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/abs-workout/' element={<AbsWorkout />} />
          <Route path='/daily-task' element={<Daily />} />
          <Route path='/form' element={<FormInfo />} />
          <Route path='/chest-workout' element={<ChestWorkout />} />
          <Route path='/experiment' element={<Experiment />} /> */}
        </Routes>
      </Router>
    </UserAuthContextProvider>
  </React.StrictMode>,
);