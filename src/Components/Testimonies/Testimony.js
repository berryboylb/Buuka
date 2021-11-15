import { useMediaQuery } from 'react-responsive';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Styles from "./css/styles.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const Testimony = ({testimonies}) => {
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
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
        infinite={true}
        autoPlaySpeed= {isMobile ? 5000 : 2000}
        keyBoardControl={true}
        transitionDuration={500}
        arrows={false}
        autoPlay={true}
        removeArrowOnDeviceType={["tablet", "mobile", 'smallmobile']}
        >
         {testimonies.map((testimony) => (
             <div key= {testimony.id} className={Styles.card}>
                 <span></span>
                 <span></span>
                 <span></span>
                 <span></span>
                 <div>
                 <div className={Styles.head}>
                    <div className={Styles.imgCon}>
                        <img src={testimony.img_src} alt={testimony.img_src} />
                    </div>
                    <div className={Styles.content}>
                        <h4>{testimony.firstname}</h4>
                        <h4>{testimony.lastname}</h4>
                        <div  className={Styles.stars}>{count(testimony.stars).map((number)=> (
                            <div key={number}>
                                 <FontAwesomeIcon className={Styles.con} icon={faStar} />
                            </div>
                        ))}</div>
                    </div>
                 </div>

                 <div className={Styles.body}>
                     <p className={Styles.comment}>{testimony.comment}</p>
                     <p className={Styles.remark}>{testimony.remark}</p>
                 </div>
                 </div>
                <div>
                    <hr className ={Styles.line} />
                    <div className ={Styles.time}>
                        <p>{testimony.time}</p>
                    </div>
                </div>
             </div>
         ))}
        </Carousel>
    )
}

export default Testimony
