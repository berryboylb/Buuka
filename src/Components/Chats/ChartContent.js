import { useRef, useEffect, useState } from "react";
import Avatar from "./Avatar";
import Styles from "./css/styles.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faPaperPlane, faPaperclip } from '@fortawesome/free-solid-svg-icons'
import ChatItem from "./ChatItem";
const ChartContent = () => {
    const messagesEndRef = useRef(null);
    const [messages, setMessages] = useState([]);
    const initialValues = {
        id: 0,
        image: "",
        type: "",
        msg: ""
    }
    const [sendValues, setSendValues] = useState(initialValues);

    const scrollToBottom =  () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    scrollToBottom();
    
    useEffect(()=> {
        let isMounted = true;
        fetch(`http://localhost:8000/messages`)
        .then(res => { return  res.json() })
        .then(data => {
            if(isMounted){
                //console.log(data);
                setMessages(data)
            }
        })
        .catch(error => {
            console.log(error.message)
        })
        return () => { isMounted = false };
    }, []);

    // useEffect(()=> {
    //     window.addEventListener("keydown", async (e) => {
    //         if (e.keyCode == 13) {
    //           if (sendValues.msg != "") {
    //             setSendValues({ ...sendValues, 
    //                 id: 1,
    //                 type: "",
    //                 msg: sendValues.msg,
    //                 image: "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
    //             });
    //             const res = await fetch('http://localhost:8000/messages', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-type': 'application/json',
    //                 },
    //                 body: JSON.stringify(sendValues),
    //             });
    //             const data = await res.json();
    //             if(data){
    //                 setMessages([...messages, data]);
    //             }
    //             setSendValues({ ...sendValues, 
    //                 id: 0,
    //                 type: "",
    //                 msg: "",
    //                 image: "",
    //             });
    //             messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    //           }
    //         }
    //     });
    // });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSendValues({ ...sendValues, [name]: value});
    };

    const addNewMessage = async() => {
        if (sendValues.msg !== "") {
            setSendValues({ ...sendValues, 
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
                type: "",
                msg: sendValues.msg,
            });
            const res = await fetch('http://localhost:8000/messages', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(sendValues),
            });
            const data = await res.json();
            if(data){
                setMessages([...messages, data]);
            }
            setSendValues({ ...sendValues, 
                id: 0,
                type: "",
                msg: "",
                image: "",
            });
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }

    
    return (
        <div className={Styles.main__chatcontent}>
            {/* <pre>{JSON.stringify(sendValues, undefined, 2)}</pre> */}
        <div className={Styles.content__header}>
          <div className={Styles.blocks}>
            <div className={Styles.currentchattinguser}>
              <Avatar
                isOnline="active"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
              />
              <p>Tim Hover</p>
            </div>
          </div>

          <div className={Styles.blocks}>
            <div className={Styles.settings}>
              <button className={Styles.btnnobg}>
                    <FontAwesomeIcon  icon={faCog} />
              </button>
            </div>
          </div>
        </div>
        <div className={Styles.content__body}>
          {messages && <div className={Styles.chat__items}>
              {messages.map((message, index) => (
                  <ChatItem
                    animationDelay={index + 2}
                    key={message.id}
                    user={message.type ? message.type : "me"}
                    msg={message.msg}
                    image={message.image}
                  />
              ))}
            <div ref={messagesEndRef}/>
          </div>}
        </div>
        <div className={Styles.content__footer}>
          <div className={Styles.sendNewMessage}>
            <input
              type="text"
              name="msg"
              placeholder="Start typing a message..."
              onChange={handleChange}
              value={sendValues.msg}
              autocomplete="new-password"
            />
            <div className={Styles.btns}>
                <button className={Styles.attachments} onClick={scrollToBottom}>
                    <FontAwesomeIcon  icon={faPaperclip} />
                </button>
                <button className={Styles.btnSendMsg}  onClick={addNewMessage} id="sendMsgBtn">
                    <FontAwesomeIcon  icon={faPaperPlane} />
                </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ChartContent
