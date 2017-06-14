/**
 * Created by apple on 16/5/17.
 */
import React, {PropTyps, Component} from "react";
import {Breadcrumb, Table, Icon} from "antd";
import {SearchComponent} from "../../../../components/common/search/search";
var echarts = require('echarts');
require("./topics_search.scss");

export class TopicsSearchComponent extends Component {


    componentDidMount() {


    }

    render() {

        const columns = [{
            title: '主题名',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a href="#">{text}</a>,
        }, {
            title: '热度',
            dataIndex: 'age',
            key: 'heat',
        },{
            title: '关联词汇',
            dataIndex: 'age',
            key: 'words'
        },
            {
                title: '关联用户',
                dataIndex: 'age',
                key: 'users'
            },
            {
                title: '关联群组',
                dataIndex: 'age',
                key: 'crowds'
            },
            {
                title: '关联社团',
                dataIndex: 'age',
                key: 'communities'
            },
            {
                title: '创建时间',
                dataIndex: 'age',
                key: 'createtime'
            }

        ];

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

        return (<div className="topics_search_container">
            <div className="tag">
                <Breadcrumb separator=">">
                    <Breadcrumb.Item>主页</Breadcrumb.Item>
                    <Breadcrumb.Item href="">主题统计</Breadcrumb.Item>
                    <Breadcrumb.Item href="">主题搜索:模糊检索出主题列表</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="search">
                <SearchComponent/>
            </div>

            <div className="main">
                <div className="topics_search_table">
                    <Table columns={columns} dataSource={data}/>,
                </div>
            </div>


        </div>);
    }
}