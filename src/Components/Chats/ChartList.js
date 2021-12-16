import ChartListItems from "./ChartListItems";
import Styles from "./css/styles.module.css"
const ChartList = ({chats, toggleState}) => {
    return (
        <div className={Styles.the__chats}>

            {/* this is all messgaes */}
           {
               toggleState === 1 && 
               <div className={Styles.testing}>
                    {chats ?
                        <div className="chatlist__items">
                            {chats.map((item, index) => {
                                return (
                                    <ChartListItems
                                        name={item.name}
                                        key={item.id}
                                        animationDelay={index + 1}
                                        active={item.active ? "active" : ""}
                                        isOnline={item.isOnline ? "active" : ""}
                                        image={item.image}
                                    />
                                );
                            })}
                        </div>
                        : 
                        <h3 className={Styles.message}>No new messages</h3>
                    }
               </div>
            }


            {/* this is for all messages */}

            {
               toggleState === 2 && 
               <div className={Styles.testing}>
                    {chats ?
                        <div className="chatlist__items">
                            {chats.map((item, index) => {
                                return (
                                    <ChartListItems
                                        name={item.name}
                                        key={item.id}
                                        animationDelay={index + 1}
                                        active={item.active ? "active" : ""}
                                        isOnline={item.isOnline ? "active" : ""}
                                        image={item.image}
                                    />
                                );
                            })}
                        </div>
                        : 
                        <h3 className={Styles.message}>No messages yet</h3>
                    }
               </div>
            }

            {/* this is for starred messages */}
            {
               toggleState === 3 && 
               <div className={Styles.testing}>
                    {chats ?
                        <div className="chatlist__items">
                            {chats.map((item, index) => {
                                return (
                                    <ChartListItems
                                        name={item.name}
                                        key={item.id}
                                        animationDelay={index + 1}
                                        active={item.active ? "active" : ""}
                                        isOnline={item.isOnline ? "active" : ""}
                                        image={item.image}
                                    />
                                );
                            })}
                        </div>
                        : 
                        <h3 className={Styles.message}>No messages yet</h3>
                    }
               </div>
            }

            {/* this is for deleted messages */}
            {
               toggleState === 4 && 
               <div className={Styles.testing}>
                    {chats ?
                        <div className="chatlist__items">
                            {chats.map((item, index) => {
                                return (
                                    <ChartListItems
                                        name={item.name}
                                        key={item.id}
                                        animationDelay={index + 1}
                                        active={item.active ? "active" : ""}
                                        isOnline={item.isOnline ? "active" : ""}
                                        image={item.image}
                                    />
                                );
                            })}
                        </div>
                        : 
                        <h3 className={Styles.message}>No Deleted messages</h3>
                    }
               </div>
            }
        </div>
    )
}

export default ChartList
