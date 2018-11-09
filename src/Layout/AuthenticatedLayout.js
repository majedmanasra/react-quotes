import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Header from "./Header";

class AuthenticatedLayout extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        return (
            <Fragment>
                <Header/>
                {this.props.children}
            </Fragment>
        );
    }
}

export default AuthenticatedLayout;
