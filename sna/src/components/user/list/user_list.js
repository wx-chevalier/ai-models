/**
 * Created by apple on 16/5/17.
 */
import React, {PropTyps, Component} from "react";
import {Breadcrumb, Table, Icon, Modal} from "antd";
import {UserActivenessComponent} from "../activeness/user_activeness";
import {UserLabelComponent} from "../label/user_label";
import {UserPropertyComponent} from "../property/user_property";

var echarts = require('echarts');
require("./user_list.scss");


export class UserListComponent extends Component {


    constructor(props) {

        super(props);

        this.state = {
            activeness_modal_visible: false,
            label_modal_visible: false,
            property_modal_visible: false
        };

        this._renderColumns = this._renderColumns.bind(this);
    }

    componentDidMount() {

    }

    _renderColumns() {
        return [
            {
                title: '用户编号',
                dataIndex: 'id',
                key: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: '昵称',
                dataIndex: 'nickname',
                key: 'nickname'
            },
            {
                title: '邮箱',
                dataIndex: 'email',
                key: 'email'
            },
            {
                title: '手机',
                dataIndex: 'mobilephone',
                key: 'mobilephone'
            },
            {
                title: '城市',
                dataIndex: 'country',
                key: 'country'
            },
            {
                title: '省份',
                dataIndex: 'province',
                key: 'province'
            },
            {
                title: '地址',
                dataIndex: 'address',
                key: 'address'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex'
            },
            {
                title: '海外',
                dataIndex: 'overseas',
                key: 'overseas',
                render: (value)=> {
                    return !!value ? "是" : "否";
                }
            },
            {
                title: '操作',
                key: 'operation',
                render: (text, record) => (
                    <span>
                      <a href="javascript:void(0)"
                         onClick={()=>{this.setState({property_modal_visible:true})}}>属性</a>
                      <span className="ant-divider"></span>
                      <a href="javascript:void(0)"
                         onClick={()=>{this.setState({label_modal_visible:true})}}>标签</a>
                      <span className="ant-divider"></span>
                      <a href="javascript:void(0)"
                         onClick={()=>{this.setState({activeness_modal_visible:true})}}>活跃度</a>
                    </span>
                ),
            }
        ];
    }

    render() {


        const data = [{
            id: '2476040580', //用户编号
            name: 'tina808629',//用户名
            nickname: 'TiNA',
            email: '1277819209@qq.com',
            mobilephone: '13999974431',
            country: 'Xinjiang',
            province: 'Urumqi',
            address: '西湖区湖底公园1号',
            sex: 1, //性别
            overseas: 0 //是否海外
        }];

        return (<div className="user_list_container">

            <div className="user_table">
                <Table columns={this._renderColumns()} dataSource={data}/>
            </div>

            <div className="modal">
                {/*用户活跃度弹窗*/}
                <Modal title="用户活跃度"
                       visible={this.state.activeness_modal_visible}
                       width={"600px"}
                       onOk={()=>{}}
                       onCancel={()=>{this.setState({activeness_modal_visible:false})}}>

                    <UserActivenessComponent/>
                </Modal>

                {/*用户标签弹窗*/}
                <Modal title="用户标签"
                       visible={this.state.label_modal_visible}
                       width={"700px"}
                       onOk={()=>{}}
                       onCancel={()=>{this.setState({label_modal_visible:false})}}>

                    <UserLabelComponent/>
                </Modal>

                {/*用户属性弹窗*/}
                <Modal title="用户属性"
                       visible={this.state.property_modal_visible}
                       width={"700px"}
                       onOk={()=>{}}
                       onCancel={()=>{this.setState({property_modal_visible:false})}}>

                    <UserPropertyComponent/>
                </Modal>
            </div>

        </div>);
    }
}