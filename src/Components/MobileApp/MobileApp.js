import Styles from "./css/styles.module.css"
const MobileApp = () => {
    return (
        <div className={Styles.mobileApp} >
            <div className="my-container">
                <div className={Styles.inner}>
                <div className={`${Styles.imgCon} ${Styles.hide}`}>
                        <img src="./images/phone.png" alt="phone" />
                   </div>
                   <div className={Styles.content}>
                       <h3>Download our MobileApp for better experience</h3>
                       <p>Book unforgettable service and professional experiences with the Buuka mobile app – the best way to dicover top-rated professionals & businesses.</p>

                       <div className={Styles.links}>
                           <a  className={Styles.goggle} href="/"><img src="./images/goggle play.png" alt="Google playstore" /></a>
                           <a className={Styles.apple} href="/"><img src="./images/App Store.png" alt="AppStore" /></a>
                       </div>
                   </div>

                   <div className={`${Styles.imgCon} ${Styles.show}`}>
                        <img src="./images/phone.png" alt="phone" />
                   </div>
                </div>
            </div>
        </div>
    )
}

export default MobileApp
