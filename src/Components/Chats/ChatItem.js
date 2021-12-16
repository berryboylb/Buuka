import Avatar from "./Avatar";
import Styles from "./css/styles.module.css";
const ChatItem = ({user, msg, image}) => {
    return (
        <div
        style={{ animationDelay: `0.8s` }}
        className={`${Styles.chat__item} ${user === "other" ? Styles.other : ""}`}
        >
        <div className={Styles.chat__item__content}>
          <div className={Styles.chat__msg}>{msg}</div>
          <div className={Styles.chat__meta}>
            <span className={Styles.span}>16 mins ago</span>
            <span className={Styles.span}>Seen 1.03PM</span>
          </div>
        </div>
        <Avatar isOnline="active" image={image} />
      </div>
    )
}

export default ChatItem
