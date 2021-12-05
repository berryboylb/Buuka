import Styles from "./css/styles.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBookmark } from '@fortawesome/free-solid-svg-icons'
const OtherCustomers = ({provider}) => {
    return (
        <div className={Styles.others}>
            <div className="my-container">
               {provider && <h3>Other vendors near {provider.name}</h3>}
            <div className={Styles.grid}>
                
               <a href="/">
                    <div className={Styles.othercus}>
                        <div className={Styles.imagename}>
                            <div className={Styles.imgCon}>
                                <img src="/Images/test1.png" alt="others" />
                            </div>
                            <div className={Styles.name}>
                                <p>Adara Beauty & Hairstyling Saloon</p>
                            </div>
                        </div>
                        <div className={Styles.con}>
                                <FontAwesomeIcon className={Styles.icon}  icon={faBookmark} /> 
                        </div>
                    </div>
                  </a>


                   <a href="/">
                    <div className={Styles.othercus}>
                        <div className={Styles.imagename}>
                            <div className={Styles.imgCon}>
                                <img src="/Images/test1.png" alt="others" />
                            </div>
                            <div className={Styles.name}>
                                <p>Adara Beauty & Hairstyling Saloon</p>
                            </div>
                        </div>
                        <div className={Styles.con}>
                                <FontAwesomeIcon className={Styles.icon}  icon={faBookmark} /> 
                        </div>
                    </div>
                  </a>


                  <a href="/">
                    <div className={Styles.othercus}>
                        <div className={Styles.imagename}>
                            <div className={Styles.imgCon}>
                                <img src="/Images/test1.png" alt="others" />
                            </div>
                            <div className={Styles.name}>
                                <p>Adara Beauty & Hairstyling Saloon</p>
                            </div>
                        </div>
                        <div className={Styles.con}>
                                <FontAwesomeIcon className={Styles.icon}  icon={faBookmark} /> 
                        </div>
                    </div>
                  </a>

                  <a href="/">
                    <div className={Styles.othercus}>
                        <div className={Styles.imagename}>
                            <div className={Styles.imgCon}>
                                <img src="/Images/test1.png" alt="others" />
                            </div>
                            <div className={Styles.name}>
                                <p>Adara Beauty & Hairstyling Saloon</p>
                            </div>
                        </div>
                        <div className={Styles.con}>
                                <FontAwesomeIcon className={Styles.icon}  icon={faBookmark} /> 
                        </div>
                    </div>
                  </a>

               </div>
           </div>
          </div>
    )
}

export default OtherCustomers
