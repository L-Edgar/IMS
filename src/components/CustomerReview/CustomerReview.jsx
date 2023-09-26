import React from 'react'
import './CustomerReview.css'
import Chart from 'react-apexcharts'


const CustomerReview = () => {
    const data={
        series:[
            {
                name:"Review",
                data:[10,50,20,40,90,60,80]
            },
        ],
        options:{
            chart:{
                type:"area",
                height:'auto'
            },
            fill:{
                colors:["#fff"],
                type:"gradient"
            },
            dataLabels:{
               enabled:false  
            },
            stroke:{
                curve:"smooth",
                colors:["#ff929f"]
            },
            tooltip:{
                x:{
                    format:"dd/MM/yy HH:mm"
                },
            },
            grid:{
                show:false
            },
            xaxis:{
                type:"datetime",
                categories:[
                    "2023-09-21T00:00:00:000Z",
                    "2023-09-21T01:00:30:000Z",
                    "2023-09-21T02:00:30:000Z",
                    "2023-09-21T03:00:30:000Z",
                    "2023-09-21T04:00:30:000Z",
                    "2023-09-21T05:00:30:000Z",
                    "2023-09-21T06:00:30:000Z",
                ]
            },
            yaxis:{
                show:false
            }
        }
    }
  return (
    <div className='CustomerReview'>
      <Chart series={data.series} options={data.options} type='area'/>
    </div>
  )
}

export default CustomerReview
