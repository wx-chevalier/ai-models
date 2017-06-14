/**
 * Created by apple on 16/4/24.
 */

import React, {Component, PropTypes} from "react";
import {render} from "react-dom";
import {Router, Route, IndexRoute, Link, hashHistory, Redirect, IndexRedirect} from "react-router";
import {HeaderComponent} from "../../components/common/header/header";
import {HomePageComponent} from "../../modules/homepage/homepage";
import {WordsComponent} from "../../modules/homepage/words/words";
import {TopicsComponent} from "../../modules/homepage/topics/topics";
import {SearchComponent} from "../../modules/homepage/search/search";
import {WordsHotComponent} from "../../modules/homepage/words/hot/words_hot";
import {WordsSearchComponent} from "../../modules/homepage/words/search/words_search";
import {WordsSettingComponent} from "../../modules/homepage/words/setting/words_setting";
import {WordsNewComponent} from "../../modules/homepage/words/new/words_new";
import {TopicsHotComponent} from "../../modules/homepage/topics/hot/topics_hot";
import {TopicsSearchComponent} from "../../modules/homepage/topics/search/topics_search";
import {SearchUserComponent} from "../../modules/homepage/search/user/search_user";
import {SearchCrowdComponent} from "../../modules/homepage/search/crowd/search_crowd";


require("./app.scss");

export class AppComponent extends Component {
    render() {
        return <div className="container">
            <div className="header">
                <HeaderComponent></HeaderComponent>
            </div>
            <div className="middle">
                {this.props.children}
            </div>
            {/*底部标识*/}
            <div className="footer">

            </div>
        </div>
    }
}

export class AppContainer extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={AppComponent}>
                    <IndexRedirect to="/homepage"/>
                    <Route path="homepage" component={HomePageComponent}>
                        <IndexRedirect to="/homepage/words"/>
                        <Route path="words" component={WordsComponent}>
                            <IndexRoute component={WordsHotComponent}/>
                            <Route path="hot" component={WordsHotComponent}/>
                            <Route path="search" component={WordsSearchComponent}/>
                            <Route path="setting" component={WordsSettingComponent}/>
                            <Route path="new" component={WordsNewComponent}/>
                        </Route>
                        <Route path="topics" component={TopicsComponent}>
                            <IndexRoute component={TopicsHotComponent}/>
                            <Route path="hot" component={TopicsHotComponent}/>
                            <Route path="search" component={TopicsSearchComponent}/>
                        </Route>
                        <Route path="search" component={SearchComponent}>
                            <IndexRoute component={SearchUserComponent}/>
                            <Route path="user" component={SearchUserComponent}/>
                            <Route path="crowd" component={SearchCrowdComponent}/>
                        </Route>
                    </Route>
                </Route>
                <Route path="*">
                    <IndexRedirect to="/homepage"/>
                </Route>
            </Router>
        )
    }

}

