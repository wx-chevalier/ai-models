/**
 * Created by apple on 16/4/24.
 */
import {Menu, Icon} from "antd";
import React, {Component, PropTypes} from "react";
import {Router, Route, IndexRoute, Link, hashHistory} from "react-router";
import "antd/dist/antd.min.css";
var FontAwesome = require('react-fontawesome');

require('font-awesome/css/font-awesome.css');
require("./header.scss");

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

/**
 * @function 默认头部组件
 */
export class HeaderComponent extends Component {

    /**
     * @region 构造以及默认值
     */


    /**
     * @function 默认构造函数
     * @param props
     */
    constructor(props) {

        super(props);

        var initial_key;

        //如果没有设置initial_key的值,则从href中获取
        var path = location.href;

        if (path.includes("/#/")) {
            initial_key = (path.substr(path.indexOf("#/") + 2, path.indexOf("?_k") - path.indexOf("#/") - 2));

            if (initial_key.includes("/")) {
                initial_key = initial_key.substr(0, initial_key.indexOf("/"));
            }

        } else {
            initial_key = "homepage";
        }

        // console.log(initial_key);

        //设置默认的State
        this.state = {
            current: initial_key
        };


        //将点击函数绑定到当前状态
        this.handleClick = this.handleClick.bind(this);
    }

    defaultProps() {

        if (this.props.config === undefined) {

            //考虑到Props本身是不可扩展的,因此重新创建一个新的对象
            this.props = {};

            //设置一个默认配置
            this.props.config = [{
                key: "homepage",
                title: "主页",
                iconType: "home",
                path: "/homepage"
            }, {
                key: "user",
                title: "用户",
                iconType: "user",
                path: "/user"
            }, {
                key: "crowd",
                title: "群组",
                iconType: "users",
                path: "/crowd"
            },
                {
                    key: "community",
                    title: "社团",
                    iconType: "user-plus",
                    path: "/community"

                },
                {
                    key: "gephi",
                    title: "Gephi",
                    iconType: "blind",
                    path: "/gephi"

                }
            ];
        }

        return this.props;
    }

    handleClick(e) {

        //打印选择的结果
        // console.log('click ', e);

        //设置选择的状态
        this.setState({
            current: e.key
        });

        //跳转到指定页面
        this.props.config.forEach((value)=> {
            if (value.key === e.key) {
                hashHistory.push(value.path);
            }
        });
    }

    render() {

        //解构析取出传入的Props
        let {config, username, role} = this.defaultProps();

        //判断是否传入了username 与 role
        if (username === undefined || role === undefined) {
            username = "Chevalier";
            role = "内容管理员";
        }

        var menus = [];

        // console.log(config);

        config.forEach((value)=> {

            menus.push(
                <Menu.Item key={value.key}>

                    <FontAwesome name={value.iconType}/>

                    {value.title}

                </Menu.Item>
            );


        });

        return (
            <div className="header_container">
                <div className="logo">
                    <div id="logoImg"></div>
                    <div id="name"><span>SocialNetworksAnalysis</span></div>
                </div>
                <div className="search"></div>
                <div className="menu">
                    <Menu onClick={this.handleClick}
                          selectedKeys={[this.state.current]}
                          mode="horizontal">
                        {menus}
                    </Menu>
                </div>
                <div className="user">
                    <div className="avatar">
                        <Link to="/user_profile"><FontAwesome name="user"/></Link>
                    </div>
                    <div className="info">
                        <div className="name">{username}</div>
                        <div className="role">{role}</div>
                    </div>
                    <div className="logout">
                        <FontAwesome name="sign-out"/>
                    </div>
                </div>
            </div>
        );
    }
}


//设置组件的Props类型
HeaderComponent.propTypes = {
    config: React.PropTypes.arrayOf(React.PropTypes.shape({
        key: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
        iconType: React.PropTypes.any.isRequired,
        path: React.PropTypes.string.isRequired,
        click: React.PropTypes.func //额外的点击事件
    })),
    username: PropTypes.string,
    role: PropTypes.string
};