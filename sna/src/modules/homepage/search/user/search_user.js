/**
 * Created by apple on 16/5/17.
 */
import React, {PropTyps, Component} from "react";
import {Breadcrumb, Table, Icon} from "antd";
import {SearchComponent} from "../../../../components/common/search/search";
import {UserListComponent} from "../../../../components/user/list/user_list";
var echarts = require('echarts');
require("./search_user.scss");


export class SearchUserComponent extends Component {


    constructor(props) {

        super(props);
    }

    componentDidMount() {

    }

    render() {

        return (<div className="search_user_container">
            <div className="tag">
                <Breadcrumb separator=">">
                    <Breadcrumb.Item>主页</Breadcrumb.Item>
                    <Breadcrumb.Item href="">全文检索</Breadcrumb.Item>
                    <Breadcrumb.Item href="">用户检索</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="search">
                <SearchComponent/>
            </div>

            <div className="user_table">
                <UserListComponent/>
            </div>


        </div>);
    }
}