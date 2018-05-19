/**
 * Created by apple on 16/5/17.
 */
import React, {PropTyps, Component} from "react";
import {Breadcrumb, Table, Icon} from "antd";
import {SearchComponent} from "../../../../components/common/search/search";
import {UserListComponent} from "../../../../components/user/list/user_list";
import {CrowdListComponent} from "../../../../components/crowd/list/crowd_list";

var echarts = require('echarts');
require("./search_crowd.scss");


export class SearchCrowdComponent extends Component {


    constructor(props) {

        super(props);
    }

    componentDidMount() {

    }

    render() {

        return (<div className="search_crowd_container">
            <div className="tag">
                <Breadcrumb separator=">">
                    <Breadcrumb.Item>主页</Breadcrumb.Item>
                    <Breadcrumb.Item href="">全文检索</Breadcrumb.Item>
                    <Breadcrumb.Item href="">群组检索</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="search">
                <SearchComponent/>
            </div>

            <div className="user_table">
                <CrowdListComponent/>
            </div>


        </div>);
    }
}