import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Styles from "./css/styles.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons'

const Providers = ({services}) => {

    const count = (value)  => {
        let arr = [];
       //console.log(typeof value)
        for(let i = 0; i < value; i++) {
            arr.push(i)
            //console.log(i)
        }
        //console.log(arr)
        return(arr)
    }


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 680 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 680, min: 464 },
          items: 1.5
        },
        smallmobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
     
    return (
        <Carousel
        className={Styles.carousel}
        responsive={responsive}
        swipeable={true}
        draggable={true}
        //autoPlay={true}
        arrows={true}
        removeArrowOnDeviceType={["tablet", "mobile", "smallmobile"]}
        >
          {services.map((service) => (
                <div key={service.id} className={Styles.card}>
                    <a href={`/provider/${service.id}`}>
                           <div className={Styles.imgCon}>
                                <img src={service.img_src} alt="" />
                           </div>
                           <div className={Styles.lot}>
                                <p className={Styles.title}>{service.title}</p>
                              <div className={Styles.cons}>
                                <p className={Styles.motto}>{service.motto}</p>
                                <p className={Styles.star}> <FontAwesomeIcon className={Styles.icon} icon={faStar} /> {service.stars}</p>
                              </div>
                                <p className={Styles.address}>{service.address}</p>

                                <div className= {Styles.bottom}>
                                    <div className={Styles.rate}>
                                        <div>
                                            {count(service.stars).map((number)=> (
                                              <div key={number}><FontAwesomeIcon key={number} className={Styles.con} icon={faStar} /></div>
                                            ))}
                                        </div>
                                        <p>{service.stars}</p>
                                    </div>
                                    <button><FontAwesomeIcon className={Styles.ico} icon={faHeart} /></button>
                                </div>
                           </div>
                    </a>
                </div>
            ))}  
        </Carousel>
    )
}

export default Providers
