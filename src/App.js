import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState , useEffect} from 'react';
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
import NotFound from './Components/NotFound/NotFound'
import VendorBookings from './Components/VendorBookings/VendorBookings';

function App() {
  const [logout, setLogout] = useState(false);
  const [tokenBearer, setTokenBearer] = useState('');
  const togglelogout = () => {
    setLogout(!logout);
  }

  //const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('isLoggedIn') === 'false')
  
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');

  useEffect(() => {
    sessionStorage.getItem('isLoggedIn');
  }, [isLoggedIn])
  return (
    <Router>
       <React.Fragment>
       <NotificationContainer/>
      
       <Routes>
          <Route path = "/" element={<Home logout={logout} togglelogout={togglelogout} isLoggedIn={isLoggedIn} tokenBearer={tokenBearer} />} />
          <Route path = "/signup" element={<Signup setTokenBearer={setTokenBearer} />} />
          <Route path ="/login" element={<Login setTokenBearer={setTokenBearer} isLoggedIn= {isLoggedIn} />}/>
          <Route path="/provider/:id" element={<SingleProvider/>} />
          <Route path="/search/:word" element={<SearchResult/>}/>
          <Route path="/buygiftcard" element={<AllGiftCards/>}/>
          <Route path ="/buygiftcard/:id" element={<SingleGiftcard/>}/>
          <Route path="/reviews" element={<Allreviews/>}/>
          <Route path="/activities" element={<MyBookings logout={logout} togglelogout={togglelogout}/>}/>

          {/* users have to be loggedin before been able to access this routes. */}
          {isLoggedIn 
          ?
          <>
          <Route path="/wallet" element={<Wallet logout={logout} togglelogout={togglelogout}/>}/>
          <Route path="/settings" element={<Settings logout={logout} togglelogout={togglelogout}/>}/>
          <Route path="/notications" element={<Notifications logout={logout} togglelogout={togglelogout}/>}/>
          <Route path="/chats" element={<Chats logout={logout} togglelogout={togglelogout}/>}/>
          <Route path="/dashboard" element={<Dashboard logout={logout} togglelogout={togglelogout}/>}/>
          <Route path="/vendorbookings" element={<VendorBookings togglelogout={togglelogout}/>}/>
          </>
          : 
          ""
          }
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        {logout && <Logout togglelogout={togglelogout}/>}
      </React.Fragment>
    </Router>
  );
}

export default App;
