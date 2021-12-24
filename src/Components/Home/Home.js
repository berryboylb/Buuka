import React, { useEffect } from 'react';
import axios from 'axios';
import {NotificationManager} from 'react-notifications';
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner';
import Provider from '../Providers/Provider'
import Categories from '../Categories/Categories'
import Numbers from '../Numbers/Numbers';
import MobileApp from '../MobileApp/MobileApp';
import Textimonies from '../Testimonies/Textimonies';
import Footer from '../Footer/Footer';
import Logout from '../Logout/Logout';

const Home = ({logout, togglelogout, isLoggedIn, setIsLoggedIn}) => {

    const token = sessionStorage.getItem('userToken');
    useEffect(() => {
        if(token) {
          const AuthStr = `Bearer ${token}`
          axios.get('https://lab.buuka.app/api/config', {
            headers: { Authorization: AuthStr }
          })
          .then(response => {
              NotificationManager.success('Successfully fetched', response.data.message, 3000);
          })
          .catch(error => {
              NotificationManager.error('Error', error.message, 5000, () => { alert('callback')});
              console.error('There was an error!', error.message);
          });
        }
      }, [token])
    
    return (
        <div>
             {/* {process.env.REACT_APP_API_KEY ? <h3>{process.env.REACT_APP_API_KEY}</h3> :  <h3>no key</h3>}
             {process.env.REACT_APP_API_KEY_2 ? <h3>{process.env.REACT_APP_API_KEY_2 }</h3> :  <h3>no key</h3>} */}
            <Navbar togglelogout={togglelogout} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            {/* {token && <h2>{token}</h2>} */}
            <Banner/>
            <Provider/>
            <Categories/>
            <Numbers/>
            <MobileApp/>
            <Textimonies/>
            <Footer/>
            {logout && <Logout togglelogout={togglelogout}/>}
        </div>
    )
}

export default Home
