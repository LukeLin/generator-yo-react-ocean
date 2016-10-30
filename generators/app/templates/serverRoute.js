import React from 'react';
import rootReducer from '../../common/pages/<%= appName %>/reducers';
import Page from '../../common/pages/<%= appName %>/Page';

export default function (req, res, next) {
    res.renderReactHTML({
        component: <Page/>,
        locals: {
            appName: <%= appName %>,
            title: '<%= appName %> page'
        },
        data: {},
        rootReducer,
        pageConfig: {
        }
    });
};
