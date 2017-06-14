/**
 * Created by apple on 16/4/24.
 */

import React from "react";
import {storiesOf, action} from "@kadira/storybook";
import {AppComponent} from "../app.js";

//导入自定义组件

storiesOf('App', module)
    .add('App', () => {
        return <AppComponent>

        </AppComponent>
    });