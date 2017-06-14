/**
 * Created by apple on 16/5/17.
 */
import React, {PropTyps, Component} from "react";
import {Breadcrumb} from "antd";
var echarts = require('echarts');

require("./words_hot.scss");


export class WordsHotComponent extends Component {

    constructor() {
        super();
    }

    /**
     * @function
     */
    componentDidMount() {

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('words_hot_canvas'));

        var option = {
            title: {
                text: '热门词汇',
                subtext: '基于聊天记录获得近期热词/全部热词',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                x: 'center',
                y: 'bottom',
                data: ['热门一', '热门二', '热门三', '热门四', '热门五', '热门六', '热门七', '热门八']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            calculable: true,
            series: [
                {
                    name: '近期热词',
                    type: 'pie',
                    radius: [20, 110],
                    center: ['25%', 200],
                    roseType: 'radius',
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    lableLine: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: [
                        {value: 10, name: '热门一'},
                        {value: 5, name: '热门二'},
                        {value: 15, name: '热门三'},
                        {value: 25, name: '热门四'},
                        {value: 20, name: '热门五'},
                        {value: 35, name: '热门六'},
                        {value: 30, name: '热门七'},
                        {value: 40, name: '热门八'}
                    ]
                },
                {
                    name: '全部热词',
                    type: 'pie',
                    radius: [30, 110],
                    center: ['75%', 200],
                    roseType: 'area',
                    data: [
                        {value: 10, name: '热门一'},
                        {value: 5, name: '热门二'},
                        {value: 15, name: '热门三'},
                        {value: 25, name: '热门四'},
                        {value: 20, name: '热门五'},
                        {value: 35, name: '热门六'},
                        {value: 30, name: '热门七'},
                        {value: 40, name: '热门八'}
                    ]
                }
            ]
        };


        // 绘制图表
        myChart.setOption(option);
    }

    render() {
        return (
            <div className="words_hot_container">
                <div className="tag">
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>主页</Breadcrumb.Item>
                        <Breadcrumb.Item href="">词统计</Breadcrumb.Item>
                        <Breadcrumb.Item href="">热门词汇:基于分词统计等列举出常用词</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div id="words_hot_canvas"></div>
            </div>
        )
    }
}