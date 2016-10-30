import React from 'react';

import createRender from '../utils/createApp';
import Page from '../../../common/pages/<%= appName %>/Page';
import rootReducer from '../../../common/pages/<%= appName %>/reducers';

import '../../css/main.css';

let createApp = createRender();

createApp({
    rootReducer,
    component: <Page/>
});
