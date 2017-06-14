/**
 * Created by apple on 16/5/18.
 */
/**
 * Created by apple on 16/5/17.
 */
import React, {PropTyps, Component} from "react";
import {Breadcrumb} from "antd";
var echarts = require('echarts');

require("./user_activeness.scss");


export class UserActivenessComponent extends Component {

    constructor() {
        super();
    }

    /**
     * @function
     */
    componentDidMount() {

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('user_activeness_canvas'));

        function randomData() {
            now = new Date(+now + oneDay);
            value = value + Math.random() * 21 - 10;
            return {
                name: now.toString(),
                value: [
                    [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-'),
                    Math.round(value)
                ]
            }
        }

        var data = [];
        var now = +new Date(1997, 9, 3);
        var oneDay = 24 * 3600 * 1000;
        var value = Math.random() * 1000;
        for (var i = 0; i < 1000; i++) {
            data.push(randomData());
        }

        var data_2 = [];
        var now = +new Date(1997, 9, 3);
        var oneDay = 24 * 3600 * 1000;
        var value = Math.random() * 1000;
        for (var i = 0; i < 1000; i++) {
            data_2.push(randomData());
        }

        var option = {
            title: {
                text: '用户活跃度'
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    params = params[0];
                    var date = new Date(params.name);
                    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
                },
                axisPointer: {
                    animation: false
                }
            },
            legend: {
                data:['单人聊天','多人聊天'],
                x: 'right'
            },
            xAxis: {
                type: 'time',
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: {
                    show: false
                }
            },
            series: [{
                name: '单人聊天',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: data
            },
                {
                    name: '多人聊天',
                    type: 'line',
                    showSymbol: false,
                    hoverAnimation: false,
                    data: data_2
                }
            ]
        };

        setInterval(function () {

            for (var i = 0; i < 5; i++) {
                data.shift();
                data.push(randomData());
            }

            myChart.setOption({
                series: [{
                    data: data
                }]
            });
        }, 1000);


        // 绘制图表
        myChart.setOption(option);
    }

    render() {
        return (
            <div className="user_activeness_container">
                <div id="user_activeness_canvas" className="user_activeness_canvas"></div>
            </div>
        )
    }
}