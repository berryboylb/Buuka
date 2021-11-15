// import { useEffect } from "react";
// import { useParams } from "react-router-dom"
// import Styles from "./css/styles.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faComments } from '@fortawesome/free-solid-svg-icons'
import Filter from "../Filter/Filter";

const SingleProvider = () => {
    // const {id} = useParams();

    // useEffect(() => {
    //     fetch(`http://localhost:8000/providers/${id}`)
    //     .then(res => {
    //       return  res.json()
    //     })
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(error => {
    //         console.log(error.message)
    //     })
    // })

    return (
        <div >
           <div className="my-container">
               <Filter/>

           <div>
               <div>
                   <div><img src="./images/test1.png" alt="Provider" /></div>
                   <div>
                       <h3>Adara Beauty & Hairstyling Saloon</h3>
                       <p>10b Ajike Faleye Street, Opposite Egbeda rd, Lagos, Nigeria.</p>
                       <div>
                           <div>
                                <div> 
                                    <FontAwesomeIcon  icon={faStar} />
                                    <FontAwesomeIcon  icon={faStar} />
                                    <FontAwesomeIcon  icon={faStar} />
                                    <FontAwesomeIcon  icon={faStar} />
                                    <p>4.8</p>
                                </div>
                                <p>132 ratings</p>
                           </div>

                           <div>
                               <a href="/">Book Now</a>
                               <a href="/"><FontAwesomeIcon  icon={faComments} />Chat</a> 
                            </div>
                       </div>
                       <h3>About Adara Beauty & Hairstyling Saloon</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi enim tempus nisi suspendisse urna feugiat. Amet ornare leo purus felis. Quam ullamcorper sagittis urna, massa ultrices nullam consectetur massa enim. Elit orci consequat a ut erat. Enim aliquam feugiat fames odio. Gravida sem id auctor amet donec cras vel faucibus odio. Pulvinar tristique at sed arcu, a, ut ullamcorper pulvinar eu. Platea vestibulum vulputate amet, tristique aliquam integer laoreet amet, nec. Nunc, mus egestas eget consectetur urna. Vulputate venenatis euismod nisl malesuada sit turpis ullamcorper pellentesque.Commodo suspendisse tellus enim purus a aliquet non rhoncus. Viverra et sed varius nulla velit gravida mollis. </p>
                       <hr />
                       <div>
                           <div>
                               <h3>Location</h3>
                               <p>10b Ajike Faleye Street, Opposite Egbeda rd, Lagos, Nigeria.</p>
                               <a href="/">Get directions</a>
                           </div>
                           <div>
                               <h3>Opening Hours</h3>
                               <p>Open now 7:30am - 6:00pm</p>
                               <a href="/">see more schedules</a>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           </div>
        </div>
    )
}

export default SingleProvider
