import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import Styles from "./css/styles.module.css";
const Profile = () => {
    return (
        <div className={Styles.profile}>
            <form action="" className={Styles.hide}>
               <div>
                    <img src="./placeholder.png" alt="Profile" />
                    <label htmlFor="image"><FontAwesomeIcon  icon={faPencilAlt} /></label>
               </div>
               <input type="file" name="img" id="image" />
               <input type="submit" value="submit" />
           </form>
            <div className={Styles.main}>
                <h3>Elijah Boluwaji</h3>
                <div className= {Styles.names}>
                    <div>  
                        <h4>First name:</h4>
                        <p>Elijah</p>
                    </div>
                    <div>  
                        <h4>Last name</h4>
                        <p>Boluwaji</p>
                    </div>
                    <div>  
                        <h4>Mobile number</h4>
                        <p>+234 806 501 8738</p>
                    </div>
                    <div>  
                        <h4>Gender</h4>
                        <p>Male</p>
                    </div>
                    <div>  
                        <h4>Date of birth</h4>
                        <p>May 7th</p>
                    </div>
                    <div>  
                        <h4>Email address</h4>
                        <p>elijahsmithmedia@gmail.com</p>
                    </div>
                </div>
                <button className={Styles.edit} type="button">Edit basic information</button>
            </div>

           <form action="" className={Styles.show}>
               <div>
                    <img src="./placeholder.png" alt="Profile" />
                    <label htmlFor="image"><FontAwesomeIcon  icon={faPencilAlt} /></label>
               </div>
               <input type="file" name="img" id="image" />
               <input type="submit" value="submit" />
           </form>
        </div>
    )
}

export default Profile
