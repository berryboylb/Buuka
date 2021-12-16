import Styles from "./css/styles.module.css"
const Avatar = ({image, isOnline}) => {
    return (
            <div className={Styles.avatar}>
                <div className={Styles.avatar__img}>
                    <img src={image} alt="#" />
                </div>
                <span className={`${Styles.isOnline} ${isOnline ? Styles.active : ""}`}></span>
            </div>
    )
}

export default Avatar
