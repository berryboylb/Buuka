import {useRef, useEffect} from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import Styles from "./css/body.module.css"
const Body = () => {
    const para = useRef();
    const box = useRef();
    const box2 = useRef();
    const q = gsap.utils.selector(box);
    const r = gsap.utils.selector(box2);
    const header = useRef();
    const icons = useRef();
    const form = useRef();
    const image = useRef();
    const tl = useRef();

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 1.1  });
    };
    const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, { scale:1 });
      };

    useEffect(() => {
        tl.current = gsap.timeline({defaults:{duration: 1.5}})
        .from(q('p'), {x: -100, opacity: 0, ease: 'elastic'})
        .from(q('h1'), {x: -100, opacity: 0, ease: 'elastic'})
        .from(q('div img'), {x: -100, opacity: 0, ease: 'elastic'})
        .from(q('form'), {x: -100, scale:1.5, opacity: 0, ease: 'elastic'})
        .from(q('div a'), {stagger: 0.3, opacity: 0})
        .from(r('img'), {x: 100, opacity: 0, duration: 1.5, scale: 2}, "-=3.5")

    }, [q,r])
    return (
        <div className={`${Styles.myContainer} ${Styles.con}`}>
            <div className={Styles.content} ref={box}>
                <p ref={para}>Coming Soon</p>

                <h1 ref={header}>Get Notified When We Launch</h1>
                <div  className={`${Styles.imgCon} ${Styles.hide}`}>
                    <img  src="./right-img.png" alt="Launch" />
                </div>

                <form action="" ref={form}>
                    <input type="email" name="email" id="email" placeholder= "Enter your email address" />
                    <button type="submit">Notify Me</button>
                </form>

                <div className={Styles.iconsCon} ref={icons}>
                        <a href="https://goggle.com"><FontAwesomeIcon className= "icons" icon={faFacebook} /></a>
                        <a href="https://goggle.com"><FontAwesomeIcon className= "icons" icon={faInstagram} /></a>
                        <a href="https://goggle.com"><FontAwesomeIcon className= "icons" icon={faTwitter} /></a>
                </div>
            </div>

            <div  className={`${Styles.imgCon} ${Styles.show}`} ref={box2}>
                <img onMouseEnter={onEnter} onMouseLeave={onLeave} ref={image} src="./right-img.png" alt="Launch" />
            </div>
        </div>
    )
}

export default Body
