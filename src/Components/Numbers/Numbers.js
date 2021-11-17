import { useState, useEffect } from "react"
import Styles from "./css/styles.module.css"
const Numbers = () => {
    const [professionals, setProfessionals] = useState("");
    const [partners, setPartners] = useState("");
    const [countries, setCountries] = useState("");
    const [appointments, setAppointments] = useState("");

    useEffect(()=> {
        setAppointments("11,000")
        setCountries("2")
        setPartners("2,000")
        setProfessionals("5,000")
    }, [])
   
    return (
        <div className={Styles.numbers}>
            <div className= "my-container">
                <div className={Styles.inner}>
                    <div className={Styles.paid}>
                        <h3>Become a seller! Get connected to clients.</h3>
                        <p>Reach thousands of clients for free and become a service provider on Buuka.</p>
                    </div>
                    <div className= {Styles.grid}>
                        <div>
                            <h4>{professionals}+</h4>
                            <p>registered professionals</p>
                        </div>
                        <div>
                            <h4>{partners}+</h4>
                            <p>partner businesses</p>
                        </div>
                        <div>
                            <h4>{countries} countries</h4>
                            <p>with Buuka available</p>
                        </div>
                        <div>
                            <h4>{appointments}+</h4>
                            <p>booked appointments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Numbers
