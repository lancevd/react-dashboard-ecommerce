import React, { useState } from 'react'
import './Card.css'
import {motion, AnimateSharedLayout} from 'framer-motion'
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import Chart from 'react-apexcharts';
import {UilTimes} from "@iconscout/react-unicons";

const Card = (props) => {
    const [expanded, setExpanded] = useState(false)

  return (
    <AnimateSharedLayout>
            {
            expanded ? 
            <ExpandedCard param={props} setExpanded={()=> setExpanded(false)}/>
             : <CompactCard param={props} setExpanded={()=> setExpanded(true)} />
            }
    </AnimateSharedLayout>
  )
}

function CompactCard ({param, setExpanded}) {
    const Icon= param.icon;
    return(
        <motion.div className="CompactCard"
        style={{
            background : param.color.backGround,
            boxShadow : param.color.boxShadow
        }}
        layoutId='expandableCard'
        onClick={setExpanded}
        >
            <div className="radialBar">
                <CircularProgressbar
                value={param.barValue}
                text={`${param.barValue}%`}
                />
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <Icon />
                <span>${param.value}</span>
                <span>Last 24 Hours</span>
            </div>
        </motion.div>
    )
}

// Expanded Card

function ExpandedCard ({param, setExpanded}) {
    const data = {
        options: {
            chart: {
                type: "area",
                height: "auto",
            },

            // dropShadow: {
            //     enabled: false,
            //     enabledOnSeries: undefined,
            //     top: 0,
            //     left: 0,
            //     blur: 3,
            //     color: '#000',
            //     opacity: 0.35,
            // },
            fill: {
                colors: ['#fff'],
                type: "gradient",
            },
            dataLabels: {
                enabled: false,
            },
            
            stroke: {
                curve: 'smooth',
                colors: ["#ff929f"],
              },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
            grid: {
                show: false,
            },
            xaxis: {
                type: "detetime",
                categories: [
                    "2018-09-19T00:00:00.000Z",
                    "2018-09-19T01:30:00.000Z",
                    "2018-09-19T02:30:00.000Z",
                    "2018-09-19T03:30:00.000Z",
                    "2018-09-19T04:30:00.000Z",
                    "2018-09-19T05:30:00.000Z",
                    "2018-09-19T06:30:00.000Z",
                ],
            },
            yaxis: {
                show: false,
            },
            toolbar: {
                show:false,
            },
        },
    }
    return(
        <motion.div className="ExpandedCard"
        style={{
            background : param.color.backGround,
            boxShadow : param.color.boxShadow
        }}
        layoutId='expandableCard'
        >
            <div style={{alignSelf: 'flex-end', cursor: 'pointer', color: '#fff',}}>
                <UilTimes onClick={setExpanded} />
            </div>
            <span>{param.title}</span>
            <div className="chartContainer">
                <Chart series={param.series} type='area' options={data.options} />
            </div> 
            <span>Last 24 Haaas</span>
        </motion.div>
    )
}


export default Card