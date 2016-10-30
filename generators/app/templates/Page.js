/**
 * This is Page Component of AppName: <%= appName %>
 */

import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import Base from '../Base.jsx';
import * as actions from './actions';

class <%= appName %>Page extends Base {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    componentDidUpdate(){

    }

    render() {
        return (
            <div>
            </div>
        )
    }
}
<%= appName %>Page.defaultProps = {
};
<%= appName %>Page.propTypes = {
};

export default connect(function mapStateToProps(state) {
    return {
    }
}, function mapDispatchToProps(dispatch){
    return {
        return bindActionCreators({

        }, dispatch);
    };
})(<%= appName %>Page);
