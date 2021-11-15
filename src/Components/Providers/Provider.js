import React from 'react'
import Providers from "./Providers"
import Styles from "./css/styles.module.css"


const Provider = () => {
    const services = [
        {
            id: 1,
            title: "UI/UX",
            address: "10b Ajike Faleye Street Opposite Egbeda rd, Lagos.",
            motto: "Innovative Digital Corporation.",
            img_src: "./providers/provideimg.png",
            stars: 4
        },

        {
            id: 2,
            title: "Therapist/Counseling",
            address: "10b Ajike Faleye Street Opposite Egbeda rd, Lagos.",
            motto: "Innovative Digital Corporation.",
            img_src: "./providers/provideimg.png",
            stars: 4
        },

        {
            id: 3,
            title: "Car Repair",
            address: "10b Ajike Faleye Street Opposite Egbeda rd, Lagos.",
            motto: "Innovative Digital Corporation.",
            img_src: "./providers/provideimg.png",
            stars: 4
        },

        {
            id: 4,
            title: "Coaching",
            address: "10b Ajike Faleye Street Opposite Egbeda rd, Lagos.",
            motto: "Innovative Digital Corporation.",
            img_src: "./providers/provideimg.png",
            stars: 4
        },
        {
            id: 5,
            title: "Software Development",
            address: "10b Ajike Faleye Street Opposite Egbeda rd, Lagos.",
            motto: "Innovative Digital Corporation.",
            img_src: "./providers/provideimg.png",
            stars: 4.8
        }
    ]

    return (
       <div className={Styles.povider}>
            <div className="my-container">
           <div className={Styles.provider}>
            <h3>Top service providers near you</h3>
            <Providers services={services}/>
           </div>
        </div>
       </div>
    )
}

export default Provider
