import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {fetchRandomTexts} from "./Actions/randomTextsActions";
import {connect} from "react-redux";
import Header from "./Layout/Header";

class AppWrapper extends Component {
    static defaultProps = {};
    static propTypes = {};
    state = {};

    componentWillMount() {
        this.props.fetchRandomTexts();
    }

    render() {
        return (
            <div className={"container"}>
                {this.props.children}
            </div>
        );
    }
}

export default connect(null, dispatch => ({
    fetchRandomTexts: () => dispatch(fetchRandomTexts())
}))(AppWrapper);
