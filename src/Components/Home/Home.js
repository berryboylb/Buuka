import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner';
import Provider from '../Providers/Provider'
import Categories from '../Categories/Categories'
import Numbers from '../Numbers/Numbers';
import MobileApp from '../MobileApp/MobileApp';
import Textimonies from '../Testimonies/Textimonies';
import Footer from '../Footer/Footer';
import Logout from '../Logout/Logout';

const Home = ({logout, togglelogout}) => {
    
    return (
        <div>
            <Navbar togglelogout={togglelogout}/>
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
