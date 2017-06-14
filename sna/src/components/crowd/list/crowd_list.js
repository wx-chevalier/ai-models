/**
 * Created by apple on 16/5/17.
 */
import React, {PropTyps, Component} from "react";
import {Breadcrumb, Table, Icon, Modal} from "antd";
import {CrowdMapComponent} from "../map/crowd_map";

var echarts = require('echarts');
require("./crowd_list.scss");


export class CrowdListComponent extends Component {


    constructor(props) {

        super(props);

        this.state = {
            map_modal_visible: false
        };

        this._renderColumns = this._renderColumns.bind(this);
    }

    componentDidMount() {

    }

    _renderColumns() {
        return [
            {
                title: '群组编号',
                dataIndex: 'id',
                key: 'id'
            },
            {
                title: '群组名',
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
                         onClick={()=>{this.setState({map_modal_visible:true})}}>成员分布</a>
                      <span className="ant-divider"></span>
                    </span>
                ),
            }
        ];
    }

    render() {


        const data = [{
            id: '2476040580', //群组编号
            name: 'tina808629',//群组名
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
                {/*成员分布地图*/}
                <Modal title="群组成员分布"
                       visible={this.state.map_modal_visible}
                       width={"1000px"}
                       style={
                        {
                            top:"20px"
                        }
                       }
                       onOk={()=>{}}
                       onCancel={()=>{this.setState({map_modal_visible:false})}}>

                    <CrowdMapComponent/>
                </Modal>

            </div>

        </div>);
    }
}