import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import { useParams } from "react-router-dom"
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faBookmark } from '@fortawesome/free-solid-svg-icons'
import Backbtn from "../backbtn/Backbtn"
import Filter from "../Filter/Filter"
import DynamicFooter from "../Footer/DynamicFooter"
import Styles from "./css/styles.module.css"

const SearchResult = () => {
    const [type, setType] = useState("")
    const [provider, setProvider] = useState(null)
    const {word} = useParams();
    const [bookmark, setBookmark] = useState(false);
    const toogleBookmark = () => {
        setBookmark(!bookmark)
    }
    
    useEffect(()=> {
        setType(word.slice(1))
        fetch(`http://localhost:8000/providers/`)
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
    }, [])
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
        <div className={Styles.searchresult}>
            <div className="my-container">
                <div className={Styles.inner}>
                    <Filter/>
                    <Backbtn/>
                    <div className={Styles.win}>
                        <div className={Styles.ola}>
                            <h3>Showing 35 results for hairstyling near your location</h3>
                        </div>
                        <div className={Styles.loc}>
                            <h5>Your current location</h5>
                            <h4>Stateline Road, Akure</h4>
                            <a href="/">Change</a>
                        </div>
                    </div>

                    {provider && <div className={Styles.result}>
                        
                        <div className={Styles.parent}>
                            <div className={Styles.imgCon}>
                                <Carousel
                                    className={Styles.carousel}
                                    responsive={responsive}
                                    swipeable={true}
                                    draggable={true}
                                    infinite={true}
                                    keyBoardControl={true}
                                    transitionDuration={500}
                                    arrows={true}
                                    >
                                        <div><img src="/Images/test1.png" alt="goat"  /></div>
                                        <div><img src="/Images/test2.png"  alt="goat" /></div>
                                        <div><img src="/Images/test3.png"  alt="goat" /></div>
                                </Carousel>
                            </div>

                           <div className={Styles.details}>
                                <div className={Styles.name}>
                                    <h3>Adara Beauty & Hairstyling Saloon</h3>
                                    <p>10b Ajike Faleye Street, Opposite Egbeda rd, Lagos, Nigeria.</p>
                                </div>
                                <div className={Styles.rate}>
                                    <div >
                                        <FontAwesomeIcon  className={Styles.icon} icon={faStar} />
                                        <FontAwesomeIcon  className={Styles.icon} icon={faStar} />
                                        <FontAwesomeIcon  className={Styles.icon} icon={faStar} />
                                        <FontAwesomeIcon  className={Styles.icon} icon={faStar} />
                                    </div>
                                        
                                    <h4>4.8</h4> <h6>· 132 rating</h6>
                                </div>
                                
                           </div>
                           <button onClick={toogleBookmark} className= {bookmark ? Styles.active :  Styles.btn}><FontAwesomeIcon className={Styles.icon}  icon={faBookmark} /></button>
                        </div>

                        <div className={Styles.parent}>
                            <div className={Styles.imgCon}>
                                <Carousel
                                    className={Styles.carousel}
                                    responsive={responsive}
                                    swipeable={true}
                                    draggable={true}
                                    infinite={true}
                                    keyBoardControl={true}
                                    transitionDuration={500}
                                    arrows={true}
                                    >
                                        <div><img src="/Images/test1.png" alt="goat"  /></div>
                                        <div><img src="/Images/test2.png"  alt="goat" /></div>
                                        <div><img src="/Images/test3.png"  alt="goat" /></div>
                                </Carousel>
                            </div>

                           <div className={Styles.details}>
                                <div className={Styles.name}>
                                    <h3>Adara Beauty & Hairstyling Saloon</h3>
                                    <p>10b Ajike Faleye Street, Opposite Egbeda rd, Lagos, Nigeria.</p>
                                </div>
                                <div className={Styles.rate}>
                                    <div >
                                        <FontAwesomeIcon  className={Styles.icon} icon={faStar} />
                                        <FontAwesomeIcon  className={Styles.icon} icon={faStar} />
                                        <FontAwesomeIcon  className={Styles.icon} icon={faStar} />
                                        <FontAwesomeIcon  className={Styles.icon} icon={faStar} />
                                    </div>
                                        
                                    <h4>4.8</h4> <h6>· 132 rating</h6>
                                </div>
                                
                           </div>
                           <button onClick={toogleBookmark} className= {bookmark ? Styles.active :  Styles.btn}><FontAwesomeIcon className={Styles.icon}  icon={faBookmark} /></button>
                        </div>
                    </div>}
                    
                </div>
            </div>
            <DynamicFooter/>
        </div>
    )
}

export default SearchResult
