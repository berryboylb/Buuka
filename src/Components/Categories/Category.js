import React from 'react'
import Styles from "./css/styles.module.css"

const Category = ({categories}) => {
    return (
        <div className={Styles.category}>
            <div className={Styles.inner}>
            {categories.map((category) => (
                    <a href="/" key={category.id}>
                        <div key= {category.id} className={Styles.find}>
                        <div className={Styles.imgCon}>
                            <img src={category.img_src} alt={category.img_src} />
                        </div>

                        <div className={Styles.bottom}>
                            <p>{category.title}</p>
                        </div>
                    </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Category
