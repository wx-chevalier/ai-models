/**
 * Created by apple on 16/5/17.
 */
import React, {PropTyps, Component} from "react";
import {Breadcrumb, Table, Icon} from "antd";
import {SearchComponent} from "../../../../components/common/search/search";
var echarts = require('echarts');
require("./words_search.scss");

export class WordsSearchComponent extends Component {


    componentDidMount() {

        var myChart = echarts.init(document.getElementById('words_search_canvas'));

        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['单人聊天', '群组聊天']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '单人聊天',
                    type: 'bar',
                    markLine: {
                        lineStyle: {
                            normal: {
                                type: 'dashed'
                            }
                        },
                        data: [
                            [{type: 'min'}, {type: 'max'}]
                        ]
                    },
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '群组聊天',
                    type: 'bar',
                    stack: '广告',
                    data: [120, 132, 101, 134, 90, 230, 210]
                }
            ]
        };

        // 绘制图表
        myChart.setOption(option);
    }

    render() {

        const columns = [{
            title: '词名',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a href="#">{text}</a>,
        }, {
            title: '频次',
            dataIndex: 'age',
            key: 'age',
        }];

        const data = [{
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
        }, {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        }, {
            key: '3',
            name: '李大嘴',
            age: 32,
            address: '西湖区湖底公园1号',
        }];

        return (<div className="words_search_container">
            <div className="tag">
                <Breadcrumb separator=">">
                    <Breadcrumb.Item>主页</Breadcrumb.Item>
                    <Breadcrumb.Item href="">词统计</Breadcrumb.Item>
                    <Breadcrumb.Item href="">关键词检索:模糊检索出关键词及频次变化</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="search">
                <SearchComponent/>
            </div>

            <div className="main">
                <div className="words_search_table">
                    <Table columns={columns} dataSource={data}/>,
                </div>
                <div id="words_search_canvas" className="words_search_canvas">

                </div>
            </div>


        </div>);
    }
}