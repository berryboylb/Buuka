import React from 'react'
import Styles from "./css/styles.module.css"
import Category from './Category'

const Categories = () => {
    const categories = [
        {
            id: 1,
            title: "Digital Services",
            img_src: "./providers/provideimg.png"
        },
        {
            id: 2,
            title: "Specialists & Pros",
            img_src: "./providers/provideimg.png"
        },
        {
            id: 3,
            title: "Technical Services",
            img_src: "./providers/provideimg.png"
        },
        {
            id: 4,
            title: "Lifestyle Services",
            img_src: "./providers/provideimg.png"
        },
        {
            id: 5,
            title: "General Services",
            img_src: "./providers/provideimg.png"
        }, 
    ]
    return (
        <div className={Styles.cetagory}>
            <div className="my-container">
            <div className={Styles.categories}>
                <h3>All Categories</h3>
                <Category categories={categories}/>
            </div>
        </div>
        </div>
    )
}

export default Categories
