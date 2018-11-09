import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import RandomTextRow from "../Components/RandomTextRow";
import {Alert, PageHeader} from "react-bootstrap";

class Favorites extends Component {
    static defaultProps = {};
    static propTypes = {};

    state = {};
    render() {
        const favorites = this.props.randomTexts.data.filter(t => t.isFavorite);

        return (
            <div>
                <PageHeader>Your favorites quotes</PageHeader>
                {favorites.map(t => <RandomTextRow randomText={t}/>)}
                {favorites.length === 0 && <Alert>You have no quotes in your favorite.</Alert>}
            </div>
        );
    }
}

export default connect(state => ({
    randomTexts: state.randomTexts
}))(Favorites);
