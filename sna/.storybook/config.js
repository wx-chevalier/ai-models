import {configure} from "@kadira/storybook";

import { disable } from 'react-komposer';

import "antd/lib/index.css";

disable();

function loadStories() {
    require('../src/app/components/.stories/common/sidebar.js');
}

configure(loadStories, module);