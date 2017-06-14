/**
 * Created by apple on 16/5/18.
 */
/**
 * Created by apple on 16/5/17.
 */
import React, {PropTyps, Component} from "react";
import {Breadcrumb, Table, Icon} from "antd";
import {SearchComponent} from "../../../../components/common/search/search";
var echarts = require('echarts');
require("./words_new.scss");

export class WordsNewComponent extends Component {


    componentDidMount() {

        var myChart = echarts.init(document.getElementById('words_search_canvas'));

        var option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['近义词1','近义词2','近义词3','近义词4','近义词5']
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'近义词1'},
                        {value:310, name:'近义词2'},
                        {value:234, name:'近义词3'},
                        {value:135, name:'近义词4'},
                        {value:1548, name:'近义词5'}
                    ]
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
            title: '概率',
            dataIndex: 'age',
            key: 'age',
        }];

        const data = [{
            key: '1',
            name: '胡彦斌',
            age: 0.2,
            address: '西湖区湖底公园1号',
        }, {
            key: '2',
            name: '胡彦祖',
            age: 0.5,
            address: '西湖区湖底公园1号',
        }, {
            key: '3',
            name: '李大嘴',
            age: 0.7,
            address: '西湖区湖底公园1号',
        }];

        return (<div className="words_search_container">
            <div className="tag">
                <Breadcrumb separator=">">
                    <Breadcrumb.Item>主页</Breadcrumb.Item>
                    <Breadcrumb.Item href="">词统计</Breadcrumb.Item>
                    <Breadcrumb.Item href="">新词发现:基于Word2Vec进行近义词/新词发现</Breadcrumb.Item>
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