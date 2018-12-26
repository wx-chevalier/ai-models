/**
 * Created by apple on 16/5/18.
 */
/**
 * Created by apple on 16/5/17.
 */
import React, {PropTyps, Component} from "react";
import {Breadcrumb} from "antd";
var echarts = require('echarts');

require("./user_label.scss");


export class UserLabelComponent extends Component {

    constructor() {
        super();
    }

    /**
     * @function
     */
    componentDidMount() {

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('user_label_canvas'));

        var option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [
                {
                    name:'高频主题',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],

                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'主题一', selected:true},
                        {value:679, name:'主题二'},
                        {value:1548, name:'主题三'}
                    ]
                },
                {
                    name:'高频用词',
                    type:'pie',
                    radius: ['40%', '55%'],

                    data:[
                        {value:335, name:'词汇1'},
                        {value:310, name:'词汇2'},
                        {value:234, name:'词汇3'},
                        {value:135, name:'词汇4'},
                        {value:1048, name:'词汇5'},
                        {value:251, name:'词汇6'},
                        {value:147, name:'词汇7'},
                        {value:102, name:'词汇8'}
                    ]
                }
            ]
        };


        // 绘制图表
        myChart.setOption(option);
    }

    render() {
        return (
            <div className="user_label_container">
                <div id="user_label_canvas" className="user_label_canvas"></div>
            </div>
        )
    }
}