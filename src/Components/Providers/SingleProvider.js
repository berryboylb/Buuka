import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faComments, faBookmark } from '@fortawesome/free-solid-svg-icons'
import Filter from "../Filter/Filter";
import Backbtn from '../backbtn/Backbtn';
import Styles from "./css/styles.module.css"
import Giftcard from "../Giftcard/Giftcard";
import Services from "../Services/Services";
import Reviews from "../Reviews/Reviews";
import DynamicFooter from "../Footer/DynamicFooter";
import OtherCustomers from "../OtherCustomers/OtherCustomers";

const SingleProvider = () => {
    //get id number from url
    const {id} = useParams();
    //fetch from endpoint
    useEffect(() => {
        if(id){
            fetch(`http://localhost:8000/providers/${id}`)
            .then(res => {
            return  res.json()
            })
            .then(data => {
                //console.log(data);
                setProvider(data)
            })
            .catch(error => {
                console.log(error.message)
            })
        }else {
            setProvider(null);
            return null;
        }
        
    }, [id])
    //declaring varisbles
    const [schedule, setSchedule] = useState(false);
    const [provider, setProvider] = useState(null)
    const handleSchedule = () => {
        setSchedule(!schedule);
    }

    //count function
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

    //carousel responsive
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 680 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 680, min: 464 },
          items: 1
        },
        smallmobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
          }
      };

    return (
        <div className={Styles.SingleProvider}>
           <div className="my-container">
               <Filter/>
                <Backbtn/>
           <div className={Styles.inner}>
               {provider && <div className={Styles.details}>
                <div className={Styles.top}>
                   <div className={Styles.images}>
                    <Carousel
                    className={Styles.carousel}
                    responsive={responsive}
                    swipeable={true}
                    draggable={true}
                    infinite={true}
                    showDots={true}
                    keyBoardControl={true}
                    transitionDuration={500}
                    arrows={true}
                    >
                        {provider.images.map((image) => (
                            <div key={image}><button><FontAwesomeIcon  icon={faBookmark} /></button><img src={image} alt={image}  /></div>
                        ))}
                    </Carousel>
                    </div>
                   <div className={Styles.location}>
                       <h3>{provider.name}</h3>
                       <p>{provider.address}</p>
                       <div className={Styles.miniloc}>
                           <div className={Styles.box}>
                                <div className={Styles.boxx}> 
                                {count(provider.stars).map((number) => (
                                     <div key={number}><FontAwesomeIcon key={number} className={Styles.icon} icon={faStar} /></div>
                                ))}
                                    <p>{provider.stars}</p>
                                </div>
                                <h5>{provider.ratings} ratings</h5>
                           </div>

                           <div className={Styles.links}>
                               <a href="/" className={Styles.book}>Book Now</a>
                               <a href="/" className={Styles.chat}><FontAwesomeIcon  icon={faComments} /> Chat</a> 
                            </div>
                       </div>
                    </div>
                   </div>

                <div className={Styles.remainder}>
                    <h3>About {provider.name}</h3>
                       <p className={Styles.p}>{provider.about}</p>
                       <hr />
                       <div className={Styles.extras}>
                           <div className={Styles.location}>
                               <h3>Location</h3>
                               <p>{provider.address}</p>
                               <a href="/">Get directions</a>
                           </div>
                           <div className={Styles.open}>
                               <h3>Opening Hours</h3>
                               <p>Open now 7:30am - 6:00pm</p>
                               {schedule && <div className ={Styles.fullsch}>
                                   {provider.schdule.map((schedule)=> (
                                        <div><h4>{schedule.day}</h4> <p>{schedule.time}</p></div>
                                   ))}
                               </div>}
                               <button onClick={handleSchedule}>{schedule ? "see less schedules" : "see more schedules"}</button>
                           </div>
                       </div>
                    </div>
               </div>}
           </div>
           <Giftcard/>
           </div>
          
           <Services/>
           <Reviews/>
           <OtherCustomers provider={provider}/>
          <DynamicFooter/>
        </div>
    )
}

export default SingleProvider
