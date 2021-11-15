import { useState, useEffect } from "react"
import Styles from "./css/styles.module.css"
const Numbers = () => {
    const [professionals, setProfessionals] = useState("");
    const [partners, setPartners] = useState("");
    const [countries, setCountries] = useState("");
    const [appointments, setAppointments] = useState("");

    useEffect(()=> {
        setAppointments("21,000")
        setCountries("32")
        setPartners("52,000")
        setProfessionals("52,000")
    }, [])
   
    return (
        <div className={Styles.numbers}>
            <div className= "my-container">
                <div className={Styles.inner}>
                    <div className={Styles.paid}>
                        <h3>Best place to get connected with experts.</h3>
                        <p>Easily book for any service with experts around you at affordable price.</p>
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
