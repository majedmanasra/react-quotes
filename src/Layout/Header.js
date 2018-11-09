import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import {withRouter} from "react-router-dom";
import {PATH_DASHBOARD, PATH_FAVORITES} from "../Utils/paths";

class Header extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    goToDashboard = () => {
        this.props.history.push(PATH_DASHBOARD)
    };

    goToFavorites = () => {
        this.props.history.push(PATH_FAVORITES)
    };

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a role={"button"} onClick={this.goToDashboard}>Quotes Dashboard</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} onClick={this.goToFavorites}>
                        Your Favorites!
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default withRouter(Header);
