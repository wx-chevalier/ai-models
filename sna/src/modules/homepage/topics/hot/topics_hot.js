/**
 * Created by apple on 16/5/17.
 */
import React, {PropTyps, Component} from "react";
import {Breadcrumb} from "antd";
var echarts = require('echarts');

require("./topics_hot.scss");


export class TopicsHotComponent extends Component {

    constructor() {
        super();
    }

    /**
     * @function
     */
    componentDidMount() {

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('topics_hot_canvas'));

        var dataBJ = [
            [1,55,9,56,0.46,18,6,"主题1"],
            [2,25,11,21,0.65,34,9,"主题2"],
            [3,56,7,63,0.3,14,5,"主题1"],
            [4,33,7,29,0.33,16,6,"主题2"],
            [5,42,24,44,0.76,40,16,"主题2"],
            [6,82,58,90,1.77,68,33,"主题1"],
            [7,74,49,77,1.46,48,27,"主题1"],
            [8,78,55,80,1.29,59,29,"主题1"],
            [9,267,216,280,4.8,108,64,"主题4"],
            [10,185,127,216,2.52,61,27,"主题5"],
            [11,39,19,38,0.57,31,15,"主题2"],
            [12,41,11,40,0.43,21,7,"主题2"],
            [13,64,38,74,1.04,46,22,"主题1"],
            [14,108,79,120,1.7,75,41,"主题3"],
            [15,108,63,116,1.48,44,26,"主题3"],
            [16,33,6,29,0.34,13,5,"主题2"],
            [17,94,66,110,1.54,62,31,"主题1"],
            [18,186,142,192,3.88,93,79,"主题5"],
            [19,57,31,54,0.96,32,14,"主题1"],
            [20,22,8,17,0.48,23,10,"主题2"],
            [21,39,15,36,0.61,29,13,"主题2"],
            [22,94,69,114,2.08,73,39,"主题1"],
            [23,99,73,110,2.43,76,48,"主题1"],
            [24,31,12,30,0.5,32,16,"主题2"],
            [25,42,27,43,1,53,22,"主题2"],
            [26,154,117,157,3.05,92,58,"主题5"],
            [27,234,185,230,4.09,123,69,"主题4"],
            [28,160,120,186,2.77,91,50,"主题5"],
            [29,134,96,165,2.76,83,41,"主题3"],
            [30,52,24,60,1.03,50,21,"主题1"],
            [31,46,5,49,0.28,10,6,"主题2"]
        ];

        var dataGZ = [
            [1,26,37,27,1.163,27,13,"主题2"],
            [2,85,62,71,1.195,60,8,"主题1"],
            [3,78,38,74,1.363,37,7,"主题1"],
            [4,21,21,36,0.634,40,9,"主题2"],
            [5,41,42,46,0.915,81,13,"主题2"],
            [6,56,52,69,1.067,92,16,"主题1"],
            [7,64,30,28,0.924,51,2,"主题1"],
            [8,55,48,74,1.236,75,26,"主题1"],
            [9,76,85,113,1.237,114,27,"主题1"],
            [10,91,81,104,1.041,56,40,"主题1"],
            [11,84,39,60,0.964,25,11,"主题1"],
            [12,64,51,101,0.862,58,23,"主题1"],
            [13,70,69,120,1.198,65,36,"主题1"],
            [14,77,105,178,2.549,64,16,"主题1"],
            [15,109,68,87,0.996,74,29,"主题3"],
            [16,73,68,97,0.905,51,34,"主题1"],
            [17,54,27,47,0.592,53,12,"主题1"],
            [18,51,61,97,0.811,65,19,"主题1"],
            [19,91,71,121,1.374,43,18,"主题1"],
            [20,73,102,182,2.787,44,19,"主题1"],
            [21,73,50,76,0.717,31,20,"主题1"],
            [22,84,94,140,2.238,68,18,"主题1"],
            [23,93,77,104,1.165,53,7,"主题1"],
            [24,99,130,227,3.97,55,15,"主题1"],
            [25,146,84,139,1.094,40,17,"主题3"],
            [26,113,108,137,1.481,48,15,"主题3"],
            [27,81,48,62,1.619,26,3,"主题1"],
            [28,56,48,68,1.336,37,9,"主题1"],
            [29,82,92,174,3.29,0,13,"主题1"],
            [30,106,116,188,3.628,101,16,"主题3"],
            [31,118,50,0,1.383,76,11,"主题3"]
        ];

        var dataSH = [
            [1,91,45,125,0.82,34,23,"主题1"],
            [2,65,27,78,0.86,45,29,"主题1"],
            [3,83,60,84,1.09,73,27,"主题1"],
            [4,109,81,121,1.28,68,51,"主题3"],
            [5,106,77,114,1.07,55,51,"主题3"],
            [6,109,81,121,1.28,68,51,"主题3"],
            [7,106,77,114,1.07,55,51,"主题3"],
            [8,89,65,78,0.86,51,26,"主题1"],
            [9,53,33,47,0.64,50,17,"主题1"],
            [10,80,55,80,1.01,75,24,"主题1"],
            [11,117,81,124,1.03,45,24,"主题3"],
            [12,99,71,142,1.1,62,42,"主题1"],
            [13,95,69,130,1.28,74,50,"主题1"],
            [14,116,87,131,1.47,84,40,"主题3"],
            [15,108,80,121,1.3,85,37,"主题3"],
            [16,134,83,167,1.16,57,43,"主题3"],
            [17,79,43,107,1.05,59,37,"主题1"],
            [18,71,46,89,0.86,64,25,"主题1"],
            [19,97,71,113,1.17,88,31,"主题1"],
            [20,84,57,91,0.85,55,31,"主题1"],
            [21,87,63,101,0.9,56,41,"主题1"],
            [22,104,77,119,1.09,73,48,"主题3"],
            [23,87,62,100,1,72,28,"主题1"],
            [24,168,128,172,1.49,97,56,"主题5"],
            [25,65,45,51,0.74,39,17,"主题1"],
            [26,39,24,38,0.61,47,17,"主题2"],
            [27,39,24,39,0.59,50,19,"主题2"],
            [28,93,68,96,1.05,79,29,"主题1"],
            [29,188,143,197,1.66,99,51,"主题5"],
            [30,174,131,174,1.55,108,50,"主题5"],
            [31,187,143,201,1.39,89,53,"主题5"]
        ];

        var schema = [
            {name: 'date', index: 0, text: '日'},
            {name: 'AQIindex', index: 1, text: '主题热度'},
            {name: 'PM25', index: 2, text: 'PM2.5'},
            {name: 'PM10', index: 3, text: 'PM10'},
            {name: 'CO', index: 4, text: '一氧化碳（CO）'},
            {name: 'NO2', index: 5, text: '二氧化氮（NO2）'},
            {name: 'SO2', index: 6, text: '二氧化硫（SO2）'}
        ];


        var itemStyle = {
            normal: {
                opacity: 0.8,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        };

        var option = {
            backgroundColor: 'white',
            color: [
                '#dd4444', '#fec42c', '#80F1BE'
            ],
            legend: {
                y: 'top',
                data: ['主题类别1', '主题类别2', '主题类别3'],
                textStyle: {
                    color: '#333',
                    fontSize: 16
                }
            },
            grid: {
                x: '10%',
                x2: 150,
                y: '18%',
                y2: '10%'
            },
            tooltip: {
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: function (obj) {
                    var value = obj.value;
                    return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                        + obj.seriesName + ' ' + value[0] + '日：'
                        + value[7]
                        + '</div>'
                        + schema[1].text + '：' + value[1] + '<br>'
                        + schema[2].text + '：' + value[2] + '<br>'
                        + schema[3].text + '：' + value[3] + '<br>'
                        + schema[4].text + '：' + value[4] + '<br>'
                        + schema[5].text + '：' + value[5] + '<br>'
                        + schema[6].text + '：' + value[6] + '<br>';
                }
            },
            xAxis: {
                type: 'value',
                name: '日期',
                nameGap: 16,
                nameTextStyle: {
                    color: '#333',
                    fontSize: 14
                },
                max: 31,
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#777'
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: '#777'
                    }
                },
                axisLabel: {
                    formatter: '{value}',
                    textStyle: {
                        color: '#333'
                    }
                }
            },
            yAxis: {
                type: 'value',
                name: '主题热度',
                nameLocation: 'end',
                nameGap: 20,
                nameTextStyle: {
                    color: '#333',
                    fontSize: 16
                },
                axisLine: {
                    lineStyle: {
                        color: '#777'
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: '#777'
                    }
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#333'
                    }
                }
            },
            visualMap: [
                {
                    left: 'right',
                    top: '10%',
                    dimension: 2,
                    min: 0,
                    max: 250,
                    itemWidth: 30,
                    itemHeight: 120,
                    calculable: true,
                    precision: 0.1,
                    text: ['圆形大小：热度'],
                    textGap: 30,
                    textStyle: {
                        color: '#333'
                    },
                    inRange: {
                        symbolSize: [10, 70]
                    },
                    outOfRange: {
                        symbolSize: [10, 70],
                        color: ['rgba(255,255,255,.2)']
                    },
                    controller: {
                        inRange: {
                            color: ['#c23531']
                        },
                        outOfRange: {
                            color: ['#444']
                        }
                    }
                },
                {
                    left: 'right',
                    bottom: '5%',
                    dimension: 6,
                    min: 0,
                    max: 50,
                    itemHeight: 120,
                    calculable: true,
                    precision: 0.1,
                    text: ['明暗：热度'],
                    textGap: 30,
                    textStyle: {
                        color: '#333'
                    },
                    inRange: {
                        colorLightness: [1, 0.5]
                    },
                    outOfRange: {
                        color: ['rgba(255,255,255,.2)']
                    },
                    controller: {
                        inRange: {
                            color: ['#c23531']
                        },
                        outOfRange: {
                            color: ['#444']
                        }
                    }
                }
            ],
            series: [
                {
                    name: '主题类别1',
                    type: 'scatter',
                    itemStyle: itemStyle,
                    data: dataBJ
                },
                {
                    name: '主题类别2',
                    type: 'scatter',
                    itemStyle: itemStyle,
                    data: dataSH
                },
                {
                    name: '主题类别3',
                    type: 'scatter',
                    itemStyle: itemStyle,
                    data: dataGZ
                }
            ]
        };


        // 绘制图表
        myChart.setOption(option);
    }

    render() {
        return (
            <div className="topics_hot_container">
                <div className="tag">
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>主页</Breadcrumb.Item>
                        <Breadcrumb.Item href="">主题统计</Breadcrumb.Item>
                        <Breadcrumb.Item href="">热门主题:基于语义主题模型发现热门主题</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div id="topics_hot_canvas"></div>
            </div>
        )
    }
}