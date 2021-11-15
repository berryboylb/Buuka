import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner';
import Provider from '../Providers/Provider'
import Categories from '../Categories/Categories'
import Numbers from '../Numbers/Numbers';
import MobileApp from '../MobileApp/MobileApp';
import Textimonies from '../Testimonies/Textimonies';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Provider/>
            <Categories/>
            <Numbers/>
            <MobileApp/>
            <Textimonies/>
            <Footer/>
        </div>
    )
}

export default Home
