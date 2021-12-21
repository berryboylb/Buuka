import * as React from "react";
import { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';
import { Chart } from "react-google-charts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSlidersH } from '@fortawesome/free-solid-svg-icons'
import Styles from "./css/styles.module.css";

const VendorChart = () => {
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
    const [chartWidth, setChartWidth] = useState('90%');
    const [chartHeight, setChartHeight] = useState('400px');

    useEffect(() => {
        if(isMobile) {
            setChartWidth('100%');
            setChartHeight('200px');
        }
    }, [isMobile])

    return (
        <div className={Styles.con}>
           <div className={Styles.top_content}>
                <div className={Styles.sales}>
                    <h3>Recent Sales</h3>
                    <p>Last 30 Days</p>
                </div>
                <div className={Styles.appointment}>
                    <p>Appointment: <span>6</span></p>
                    <p className={Styles.ment}>Appointment value: <span>₦G₦200.00</span></p>                </div>
                <div className={Styles.amount}>
                    <h3>₦G₦200.00</h3>
                </div>
                <div className={Styles.toggle}>
                    <button><FontAwesomeIcon className={Styles.icon}  icon={faSlidersH} /></button>
                </div>
           </div>
            
            <Chart
                width={chartWidth}
                height={chartHeight}
                chartType="LineChart"
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
                        title: 'Sales Appointments',
                        gridlines: {
                            color: 'transparent'
                        },
                        //format: "EE, dd/MM" 
                    },
                    vAxis: {
                         title: '',
                         format: '₦ #'
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
    )
}

export default VendorChart
