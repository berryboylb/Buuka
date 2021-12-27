import { useState, useEffect } from "react";
import Styles from "./css/styles.module.css";
const Bottom = () => {
    const [staffs, setStaffs] = useState(null);

    useEffect(()=> {
        let isMounted = true;
        fetch(`http://localhost:8000/staffs`)
        .then(res => {
        return  res.json()
        })
        .then(data => {
            if(isMounted){
                //console.log(data);
                setStaffs(data)
            }
        })
        .catch(error => {
            console.log(error.message)
        })
        return () => { isMounted = false }; 
    }, [staffs]);

    return (
        <div className={Styles.bottom}>
            <h3  className={Styles.title}>Top Staff</h3>
            <div className={Styles.names}>
                <div className={Styles.staff}>
                    <h4>Staff</h4>
                </div>
                <div className={Styles.others}>
                    <div>
                        <h4>Best Service</h4>
                    </div>
                    <div>
                        <h4>This month</h4>
                    </div>
                    <div>
                        <h4>Last month</h4>
                    </div>
                    <div>
                        <h4>Total</h4>
                    </div>
                </div>
            </div>

            {staffs ? <div className={Styles.con}>
                {staffs.map((staff, index) => (
                <div className={Styles.content}>
                    <div className={Styles.staff}>
                        <h4>{staff.name}</h4>
                    </div>

                    <div className={Styles.others}>
                        <div>
                            <h4>{staff.bestService}</h4>
                        </div>
                        <div>
                            <h4>NGN{staff.thisMonth}</h4>
                        </div>
                        <div>
                            <h4>NGN{staff.lastMonth}</h4>
                        </div>
                        <div>
                            <h4>NGN{staff.total}</h4>
                        </div>
                    </div>
                </div>))}
            </div> :
            <div className={Styles.empty}>
                <h3>No Staffs data</h3>
            </div>
        }
        </div>
    )
}

export default Bottom
