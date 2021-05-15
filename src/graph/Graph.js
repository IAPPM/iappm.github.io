import { Scale, legend, Title } from 'chart.js';
import React from 'react'
import {useState} from "react"
import { PolarArea, Chart, Bar } from 'react-chartjs-2';
import { Switch } from '@material-ui/core';
const ChartJsImage = require('chartjs-to-image');
const myChart = new ChartJsImage();

const Graph = props => {
    const title = props.data.datasets[0].label
    const [swichChooseLegend, setswichChooselegend] = useState(true)
    const [swichChooseTitle, setswichChooseTitle] = useState(true)
   
    myChart.setWidth(2000).setHeight(2000).setBackgroundColor('transparent');
    myChart.setConfig({
        type:'polarArea',
        data: {
            labels: props.data.labels,
            datasets:[{
                label: props.data.datasets[0].label,
                data: props.data.datasets[0].data,
                backgroundColor: props.data.datasets[0].backgroundColor,
            }]
        },
        height: 500,
        width:500,
        options:{
            legend:{
                display: swichChooseLegend ,
                position: 'bottom',
                align: 'center  ',
                // maxWidth: 1 ,
                // align: 'start',
                labels: {
                    padding: 10,
                    usePointStyle: true,
                    boxWidth: 30,
                    boxHeight: 10,
                },
                title:{
                    display: true,
                    align: 'center', 
                    text: [title],
                    font:{
                        size:30,
                    }
                }
                
            },
            elements:{
                arc:{
                    borderWidth: 10,
                    borderColor:'rgba(255,253,255,0)'
                }
            }
        }
    })
    return(
        <div>
            <PolarArea 
                type='polarArea'
                data={props.data} 
                height={10} 
                width={10} 
                options={{
                    plugins:{
                        legend:{
                            display: swichChooseLegend ,
                            position: 'bottom',
                            align: 'center  ',
                            // maxWidth: 1 ,
                            // align: 'start',
                            labels: {
                                padding: 10,
                                usePointStyle: true,
                                boxWidth: 30,
                                boxHeight: 10,
                            }
                        },
                        title:{
                            display: swichChooseTitle,
                            align: 'center', 
                            text: [title],
                            font:{
                                size:30,
                            }
                        }
                    },
                    elements:{
                        arc:{
                            borderWidth: 10,
                            borderColor:'rgba(255,253,255,0)'
                        }
                    }
                }} >
                {/* <canvas id='mychars' ref={cofig} /> */}
            </PolarArea>
            <Switch color="secondary" checked={swichChooseLegend} onChange={e => setswichChooselegend(e.target.checked)} />
            <label>Ativar legenda</label>
            <Switch color="secondary" checked={swichChooseTitle} onChange={e => setswichChooseTitle(e.target.checked)} />
            <label>Ativar titulo</label>
        </div> 
    )

}

export {
    Graph,
    myChart
    
}