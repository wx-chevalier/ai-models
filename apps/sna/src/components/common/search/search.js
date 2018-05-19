/**
 * Created by apple on 16/5/17.
 */
import React, {PropTypes, Component} from "react";
import {Button, Icon} from "antd";
import { Select } from 'antd';
const Option = Select.Option;
require('./search.scss');

export class SearchComponent extends Component {

    render() {

        const clickHandler = this.props.click || (()=> {
            });

        var type_bar;

        //判断是否设置了搜索的类别
        if (!!this.props.type && this.props.type instanceof Array) {
            type_bar = <Select className="type_select" defaultValue="lucy" style={{ width: 120,height:40 }} onChange={()=>{}}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>Disabled</Option>
                <Option value="yiminghe">yiminghe</Option>
            </Select>
        }

        return (<div className="search_component_container">
            {type_bar}
            <div className="container-4">
                <input type="search" id="search" placeholder="Search..."/>
            </div>
            <Button type="primary" icon="search">搜索</Button>
        </div>)

    }
}

SearchComponent.propTypes = {
    click: PropTypes.func, //搜索按钮的点击事件
    type: PropTypes.array  //可选择的栏目类型
};