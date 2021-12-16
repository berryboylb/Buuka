import React,{ useState, useEffect} from "react"
import Miscellenous from "../miscellenous/Miscellenous"
import ChartContent from "./ChartContent";
import ChartList from "./ChartList";
import Search from "./Search";
import Type from "./Type";
import Styles from "./css/styles.module.css"
const Chats = ({togglelogout}) => {
    const name = "Chats";
    const [toggleState, setToggleState] = useState(1);
    const [chats, setChats] = useState(null)
    const toggleTab = (index) => {
        setToggleState(index)
    }
    useEffect(()=> {
        let isMounted = true;
        fetch(`http://localhost:8000/allChatUsers`)
        .then(res => { return  res.json() })
        .then(data => {
            if(isMounted){
                //console.log(data);
                setChats(data)
            }
        })
        .catch(error => {
            console.log(error.message)
        })
        return () => { isMounted = false };
    }, []);
    
    return (
        <div className="my-container">
            <Miscellenous togglelogout={togglelogout} name={name}/>
            <div className={Styles.chats}>
                <div className={Styles.anchor}>
                    <Type toggleState={toggleState} toggleTab={toggleTab} />
                    <Search />
                </div>
                <div className={Styles.body}>
                    <ChartList chats={chats} toggleState={toggleState}/>
                    <ChartContent/>
                </div>
            </div>
        </div>
    )
}

export default Chats
