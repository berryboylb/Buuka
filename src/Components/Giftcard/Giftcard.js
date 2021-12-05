import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Styles from "./css/styles.module.css"
const Giftcard = () => {
    const [giftcard, setGiftCard] = useState(null)
    useEffect(() => {
        let isMounted = true;
        fetch(`http://localhost:8000/giftcards`)
        .then(res => {
            return  res.json()
        })
        .then(data => {
            //console.log(data);
            if(isMounted){
                setGiftCard(data)
            }  
        })
        .catch(error => {
            console.log(error.message)
        })
        return () => { isMounted = false };
    }, [giftcard])
    const responsive = {
        superLargeDesktop: {
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
        <div className={Styles.giftcard}>
            <div>
                <div className={Styles.inner}>
                    <h3>GiftCards</h3>
                    {giftcard && <Carousel
                    className={Styles.carousel}
                    responsive={responsive}
                    swipeable={true}
                    draggable={true}
                    keyBoardControl={true}
                    transitionDuration={500}
                    arrows={false}
                    >
                        {
                            giftcard.map((giftcard) => (
                                <a href={`/buygiftcard/${giftcard.id}`} key={giftcard.price}>
                                    <div className={Styles.single}>
                                        <h5>GiftCard</h5>
                                        <h6>Redeem on all services</h6>
                                            <hr />
                                        <p>₦ {giftcard.price}</p>
                                    </div>
                                </a>
                            ))
                        }
                    </Carousel>}

                    <a href="/buygiftcard">Show all Giftcards</a>
                </div>
            </div>
        </div>
    )
}

export default Giftcard
