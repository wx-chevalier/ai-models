/**
 * Created by apple on 16/5/18.
 */
/**
 * Created by apple on 16/5/17.
 */
import React, {PropTyps, Component} from "react";
import {Breadcrumb} from "antd";
var echarts = require('echarts');

require("./user_property.scss");


export class UserPropertyComponent extends Component {

    constructor() {
        super();
    }

    /**
     * @function
     */
    componentDidMount() {

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('user_property_canvas'));

        var option = {
            tooltip: {},
            legend: {
                data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
            },
            radar: {
                // shape: 'circle',
                indicator: [
                    {name: '销售（sales）', max: 6500},
                    {name: '管理（Administration）', max: 16000},
                    {name: '信息技术（Information Techology）', max: 30000},
                    {name: '客服（Customer Support）', max: 38000},
                    {name: '研发（Development）', max: 52000},
                    {name: '市场（Marketing）', max: 25000}
                ]
            },
            series: [{
                name: '预算 vs 开销（Budget vs spending）',
                type: 'radar',
                // areaStyle: {normal: {}},
                data: [
                    {
                        value: [4300, 10000, 28000, 35000, 50000, 19000],
                        name: '预算分配（Allocated Budget）'
                    },
                    {
                        value: [5000, 14000, 28000, 31000, 42000, 21000],
                        name: '实际开销（Actual Spending）'
                    }
                ]
            }]
        };


        // 绘制图表
        myChart.setOption(option);
    }

    render() {
        return (
            <div className="user_property_container">
                <div id="user_property_canvas" className="user_property_canvas"></div>
            </div>
        )
    }
}