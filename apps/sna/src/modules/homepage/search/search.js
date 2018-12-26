/**
 * Created by apple on 16/4/25.
 */
import React, {Component, PropTypes} from "react";

/**
 * @function 显示热门词汇的组件
 */
export class SearchComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return <div>{this.props.children}</div>;
    }
}
/**
 * Created by apple on 16/4/25.
 */
