import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import Home from './Components/Home/Home'
import './App.css';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import SingleProvider from './Components/Providers/SingleProvider';
import SearchResult from './Components/SearchResult/SearchResult';
import AllGiftCards from './Components/Giftcard/AllGiftCards';
import SingleGiftcard from './Components/Giftcard/SingleGiftcard';
import Allreviews from './Components/Reviews/Allreviews';
import MyBookings from './Components/MyBookings/MyBookings';
import Wallet from './Components/Wallet/Wallet';
import Settings from './Components/Settings/Settings';

function App() {
  const [logout, setLogout] = useState(false)
    const togglelogout = () => {
        setLogout(!logout);
    }

  return (
    <Router>
       <React.Fragment>
       <Routes>
          <Route path = "/" element={<Home logout={logout} togglelogout={togglelogout}/>} />
          <Route path = "/signup" element={<Signup/>} />
          <Route path ="/login" element={<Login/>}/>
          <Route path="/provider/:id" element={<SingleProvider/>} />
          <Route path="/search/:word" element={<SearchResult/>}/>
          <Route path="/buygiftcard" element={<AllGiftCards/>}/>
          <Route path ="/buygiftcard/:id" element={<SingleGiftcard/>}/>
          <Route path="/reviews" element={<Allreviews/>}/>
          <Route path="/pending" element={<MyBookings logout={logout} togglelogout={togglelogout}/>}/>
          <Route path="/wallet" element={<Wallet logout={logout} togglelogout={togglelogout}/>}/>
          <Route path="/settings" element={<Settings logout={logout} togglelogout={togglelogout}/>}/>
        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default App;
