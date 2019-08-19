/**
 * Created by apple on 16/4/25.
 */
import {Menu, Icon} from "antd";
import React, {Component, PropTypes} from "react";
import {Link} from "react-router";
require("./homepage.scss");
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


/**
 * @function API操作的主界面
 */
export class HomePageComponent extends Component {

    constructor() {

        super();

        this.state = {
            current: "1"
        }

        this.handleClick = this.handleClick.bind(this);
    }

    /**
     * @function 处理点击事件
     * @param e
     */
    handleClick(e) {
        this.setState({
            current: e.key
        });
    }

    /**
     * @function 默认渲染函数
     * @returns {XML}
     */
    render() {
        return (
            <div className="api_container">
                <div className="menu">
                    <Menu onClick={this.handleClick}
                          defaultOpenKeys={['sub1','sub2','sub3']}
                          selectedKeys={[this.state.current]}
                          mode="inline">
                        <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>全文检索</span></span>}>
                            <Menu.Item key="search_user"><Link to="/homepage/search/user">用户</Link></Menu.Item>
                            <Menu.Item key="search_crowd"><Link to="/homepage/search/crowd">群组</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>词统计</span></span>}>
                            <Menu.Item key="words_hot"><Link to="/homepage/words/hot">热门词汇</Link></Menu.Item>
                            <Menu.Item key="words_key"><Link to="/homepage/words/search">关键词检索</Link></Menu.Item>
                            <Menu.Item key="words_setting"><Link to="/homepage/words/setting">词定义</Link></Menu.Item>
                            <Menu.Item key="words_new"><Link to="/homepage/words/new">新词发现</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="appstore" /><span>主题统计</span></span>}>
                            <Menu.Item key="topics_hot"><Link to="/homepage/topics/hot">热门主题</Link></Menu.Item>
                            <Menu.Item key="topics_search"><Link to="/homepage/topics/search">主题搜索</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                {/*操作面板*/}
                <div className="panel">
                    {this.props.children}
                </div>
            </div>
        );
    }
}