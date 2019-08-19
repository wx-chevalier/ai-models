/**
 * Created by apple on 16/5/17.
 */
import React, {PropTyps, Component} from "react";
import {Breadcrumb, Table, Icon,Button} from "antd";
var echarts = require('echarts');
require("./words_setting.scss");
/**
 * @function
 */
export class WordsSettingComponent extends Component {

    render() {

        const columns = [{
            title: '词名',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a href="#">{text}</a>,
        }, {
            title: '创建时间',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: '创建者',
            dataIndex: 'name',
            key: 'address',
        }, {
            title: '操作',
            key: 'operation',
            render: (text, record) => (
                <span><a href="javascript:void(0)">删除</a></span>
            )
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



        return (<div className="words_setting_container">
            <div className="tag">
                <Breadcrumb separator=">">
                    <Breadcrumb.Item>主页</Breadcrumb.Item>
                    <Breadcrumb.Item href="">词统计</Breadcrumb.Item>
                    <Breadcrumb.Item href="">词设置:停止词与自定义词设置</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div className="main">

                <div className="stops_table">

                    <div style={{ marginBottom: 16 }}>
                        <span>停止词设置</span>
                        <Button type="primary" onClick={this.start}
                                disabled={false} loading={false}>添加</Button>
                    </div>
                    <Table size="size" columns={columns} dataSource={data}/>
                </div>
                <div className="custom_table">
                    <div></div>
                    <div style={{ marginBottom: 16 }}>
                        <span>自定义词设置</span>
                        <Button type="primary" onClick={this.start}
                                disabled={false} loading={false}>添加</Button>
                    </div>
                    <Table size="size" columns={columns} dataSource={data}/>
                </div>

            </div>


        </div>);
    }

}