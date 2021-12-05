import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import Styles from "./css/styles.module.css"
const Reviews = () => {
    const [reviews, setReviews] = useState(null)
    useEffect(()=> {
        fetch(`http://localhost:8000/reviews`)
            .then(res => {
            return  res.json()
            })
            .then(data => {
                //console.log(data);
                setReviews(data)
            })
            .catch(error => {
                console.log(error.message)
            })
    }, [])

    const counter = (value)  => {
        let arr = [];
       //console.log(typeof value)
        for(let i = 0; i < value; i++) {
            arr.push(i)
            //console.log(i)
        }
        //console.log(arr)
        return(arr)
    }
    return (
        <div className={Styles.review}>
           <div className="my-container">
                <div className={Styles.inner}>
                    <div className={Styles.top}>
                        <h3>Reviews</h3>
                        <form action="">
                            <h3>filter By</h3>
                            <select name="" id="">
                                <option value="5">5 Stars</option>
                                <option value="4">4 Stars</option>
                                <option value="3">3 Stars</option>
                                <option value="2">2 Stars</option>
                                <option value="1">1 Stars</option>
                            </select>
                        </form>
                    </div>

                    {reviews && <div>
                        {reviews.slice(0,3).map((review)=>(
                         <div key={review.id} className={Styles.singlereview}>
                         <div className={Styles.oui}>
                             <div className={Styles.nameImg}>
                                 <div className={Styles.imgCon}>
                                     <img src={review.img_src} alt="review" />
                                 </div>
                                 <div className={Styles.name}>
                                     <h3>{review.name}</h3>
                                     <p>{review.data}</p>
                                     <div className={`${Styles.iconn} ${Styles.hide}`}>
                                         {counter(review.stars).map((number)=> (
                                             <div key={number}><FontAwesomeIcon key={number} className={Styles.icon} icon={faStar} /></div>
                                         ))}
                                     </div>
                                 </div>
                             </div>
                             <div className={`${Styles.iconn} ${Styles.show}`}>
                                 {counter(review.stars).map((number)=> (
                                     <div key={number}><FontAwesomeIcon key={number} className={Styles.icon} icon={faStar} /></div>
                                 ))}
                             </div>
                         </div>
                         <p>{review.review}.</p>
                     </div>
                    ))}
                    </div>}
                    <a href="/reviews">See all reviews</a>
                </div>
           </div>
        </div>
    )
}

export default Reviews
