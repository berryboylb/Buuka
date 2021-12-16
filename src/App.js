import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
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
import Notifications from './Components/Notifications/Notifications';
import Logout from './Components/Logout/Logout';
import Chats from './Components/Chats/Chats';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  const [logout, setLogout] = useState(false)
    const togglelogout = () => {
        setLogout(!logout);
    }

  return (
    <Router>
       <React.Fragment>
       <NotificationContainer/>
       <Routes>
          <Route path = "/" element={<Home logout={logout} togglelogout={togglelogout}/>} />
          <Route path = "/signup" element={<Signup/>} />
          <Route path ="/login" element={<Login/>}/>
          <Route path="/provider/:id" element={<SingleProvider/>} />
          <Route path="/search/:word" element={<SearchResult/>}/>
          <Route path="/buygiftcard" element={<AllGiftCards/>}/>
          <Route path ="/buygiftcard/:id" element={<SingleGiftcard/>}/>
          <Route path="/reviews" element={<Allreviews/>}/>
          <Route path="/activities" element={<MyBookings logout={logout} togglelogout={togglelogout}/>}/>
          <Route path="/wallet" element={<Wallet logout={logout} togglelogout={togglelogout}/>}/>
          <Route path="/settings" element={<Settings logout={logout} togglelogout={togglelogout}/>}/>
          <Route path="/notications" element={<Notifications logout={logout} togglelogout={togglelogout}/>}/>
          <Route path="/chats" element={<Chats logout={logout} togglelogout={togglelogout}/>}/>
          <Route path="/dashboard" element={<Dashboard logout={logout} togglelogout={togglelogout}/>}/>
        </Routes>
        {logout && <Logout togglelogout={togglelogout}/>}
      </React.Fragment>
    </Router>
  );
}

export default App;
