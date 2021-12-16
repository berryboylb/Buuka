import Avatar from "./Avatar";
import Styles from "./css/styles.module.css"
const ChartListItems = ({name, image, isOnline, active, animationDelay}) => {

    const selectChat = (e) => {
        for (
          let index = 0;
          index < e.currentTarget.parentNode.children.length;
          index++
        ) {
          e.currentTarget.parentNode.children[index].classList.remove("active");
        }
        e.currentTarget.classList.add("active");
    };

    return (
        <div onClick={selectChat}
        style={{ animationDelay: `0.${animationDelay}s` }}
        className={`${Styles.single} ${active ? Styles.activated : ""}`}
        >
        {/* {active ? "true" : "false"} */}
        <Avatar
          image={
            image ? image : "https://www.paintingcontest.org/components/com_djclassifieds/assets/images/default_profile.png"
          }
          isOnline={isOnline}
        />

        <div className={Styles.userMeta}>
          <p>{name}</p>
          <span className="activeTime">32 mins ago</span>
        </div>
      </div>
    )
}

export default ChartListItems
