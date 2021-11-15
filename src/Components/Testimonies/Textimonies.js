import Styles from "./css/styles.module.css"
import Testimony from "./Testimony"
const Textimonies = () => {

    const testimonies = [
        {
            id: 1,
            firstname: "Ralph",
            lastname: "Emmanuella",
            stars: 4,
            img_src: "./images/test1.png",
            comment: "No matter where you go, Buuka is the coolest, most professional services, fast, affordable and top-notch. Another thing is that the service providers are homely.",
            remark: "I love this so much.",
            time: "3.30pm"
        },
        {
            id: 2,
            firstname: "Abigail",
            lastname: "Veronica",
            stars: 5,
            img_src: "./images/test2.png",
            comment: "The service was excellent. I can’t understand how we’ve been living without Buuka.",
            remark: " I’m definitely coming for more.",
            time: "3.30pm"
        },
        {
            id: 3,
            firstname: "Gabriel",
            lastname: "Maphuzik",
            stars: 3,
            img_src: "./images/test3.png",
            comment: "Buuka!!!!!!!! My mind is so blown. My customer experience was so loving, easy and fast. Another thing is that the service providers are homely.",
            remark: "Great and perfect job!!!",
            time: "3.30pm"
        },
        {
            id: 4,
            firstname: "Ralph",
            lastname: "Emmanuella",
            stars: 4,
            img_src: "./images/test1.png",
            comment: "No matter where you go, Buuka is the coolest, most professional services, fast, affordable and top-notch. Another thing is that the service providers are homely.",
            remark: "I love this so much.",
            time: "3.30pm"
        },
        {
            id: 5,
            firstname: "Abigail",
            lastname: "Veronica",
            stars: 5,
            img_src: "./images/test2.png",
            comment: "The service was excellent. I can’t understand how we’ve been living without Buuka.",
            remark: " I’m definitely coming for more.",
            time: "3.30pm"
        },
        {
            id: 6,
            firstname: "Gabriel",
            lastname: "Maphuzik",
            stars: 3,
            img_src: "./images/test3.png",
            comment: "Buuka!!!!!!!! My mind is so blown. My customer experience was so loving, easy and fast. Another thing is that the service providers are homely.",
            remark: "Great and perfect job!!!",
            time: "3.30pm"
        },
    ]
    return (
        <div className={Styles.testimonies}>
           <div className="my-container">
               <div className={Styles.inner}>
                    <h3>Why our customers love Buuka</h3>
                    <Testimony testimonies={testimonies}/>
               </div>
           </div>
        </div>
    )
}

export default Textimonies
