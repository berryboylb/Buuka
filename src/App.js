import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home'
import './App.css';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
//import SingleProvider from './Components/Providers/SingleProvider';

function App() {
  return (
    <Router>
       <React.Fragment>
       <Routes>
          <Route path = "/" element={<Home/>} />
          <Route path = "/signup" element={<Signup/>} />
          <Route path ="/login" element={<Login/>}/>
          {/* <Route path="/provider/" element={<SingleProvider/>} /> */}
          {/* <Route path="/provider/:id" element={<SingleProvider/>} /> */}
        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default App;
