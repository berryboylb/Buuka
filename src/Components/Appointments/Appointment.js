import { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';
import { Chart } from "react-google-charts";
import Appointmentheader from "../miscellenous/Appointmentheader";
import Styles from "./css/styles.module.css";
const Appointment = () => {
    const [appointments, setAppointments] = useState(null);
    const data = [
                ['x', 'Sales', 'Appointment'],
                [0, 0, 0],
                [1, 10, 5],
                [2, 23, 15],
                [3, 17, 9],
                [4, 18, 10],
                [5, 9, 5],
                [6, 11, 3],
                [7, 27, 19],
            ];
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
    const [chartWidth, setChartWidth] = useState('100%');
    const [chartHeight, setChartHeight] = useState('85%');

        useEffect(() => {
        if(isMobile) {
            setChartWidth('100%');
            setChartHeight('80%');
        }
        }, [isMobile])

    const title1 = "Upcoming Appointment";
    const numberofDays = "Next 7days";

    useEffect(()=> {
        let isMounted = true;
        fetch(`http://localhost:8000/appointment`)
        .then(res => {
        return  res.json()
        })
        .then(data => {
            if(isMounted){
                //console.log(data);
                setAppointments(data)
            }
        })
        .catch(error => {
            console.log(error.message)
        })
        return () => { isMounted = false }; 
    }, [appointments]);


    return (
        <div className={Styles.appointment}>
            <div className={Styles.today}>
                <h4 className={Styles.title}>Today’s Appointment</h4>
                {appointments ?
                 <div className={Styles.appointment_list}>
                   {appointments.map((appointment, index) => (
                       <div key={index} className={Styles.single_appointment}>
                            <div className={Styles.content}>
                                <h4>{appointment.name}</h4>
                                <p>{appointment.about}</p>
                                <p>{appointment.date} · <span>{appointment.time}</span></p>
                            </div>
                            <div className={Styles.amount}>
                                <p>NGN{appointment.amount}</p>
                            </div>
                        </div>
                   ))}
                </div>: 
                <div className={Styles.empty}>
                    <h3>No Appointments</h3>
                </div>
                }
            </div>

            <div className={Styles.upcoming}>
                <Appointmentheader title={title1} days={numberofDays}/>
                <div className={Styles.numbers}>
                    <div className={Styles.flex}>
                        <p>Confirmed Appointments: <span>1</span> </p>
                        <p className={Styles.bold}>Booked: <span>03</span> </p>
                    </div>
                    <div className={Styles.space}>
                        <p>Cancelled Appointments: <span>2</span></p>
                    </div>
                </div>
                <Chart
                    width={chartWidth}
                    height={chartHeight}
                    chartType="ColumnChart"
                    loader={<div>Loading Chart</div>}
                    data={data}
                    options={{
                        chartArea: {
                            //backgroundColor: 'green',
                            width: 'auto'
                        },
                        backgroundColor: '#FCF7F7',
                        borderRadius: '20px',
                        hAxis: {
                            title: 'Confirmed Cancelled',
                            gridlines: {
                                color: 'transparent'
                            },
                            //format: "EE, dd/MM" 
                        },
                        vAxis: {
                            title: '',
                            //format: '₦ #'
                        },
                        animation: {
                            duration: 1000,
                            easing: 'out',
                            startup: true,
                        },
                        series: {
                            0: { curveType: 'function', color: '#db5a6b' },
                            1: { curveType: 'function', color: 'blue' },
                        },
                    }}
                    rootProps={{ 'data-testid': '2' }}
                />
            </div>
        </div>
    )
}

export default Appointment
