import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Col, Glyphicon, ListGroupItem, PageHeader, Row} from "react-bootstrap";
import {addToFavorite, removeFromFavorite} from "../actions/randomTextsActions";
import {connect} from "react-redux";

class RandomTextRow extends Component {
    static defaultProps = {};
    static propTypes = {};
    state = {};

    toggleFavorite = (randomText) => {
        randomText.isFavorite? this.props.removeFromFavorite(randomText.id): this.props.addToFavorite(randomText.id);

        // TODO: don't use force update
        this.forceUpdate(); // Because its deep nested, the change won't get detected (should use immutable js)
    };

    render() {
        return (
            <ListGroupItem className={"random-text-row"}>
                <div className={"favorite-icon"} onClick={() => this.toggleFavorite(this.props.randomText)}>
                    <Glyphicon glyph="star" className={this.props.randomText.isFavorite? "favorite-on": "favorite-off"}/>
                </div>

                <div>
                    {this.props.randomText.name}
                </div>
            </ListGroupItem>
        );
    }
}

export default connect(null, dispatch => ({
    addToFavorite: (id) => dispatch(addToFavorite(id)),
    removeFromFavorite: (id) => dispatch(removeFromFavorite(id))
}))(RandomTextRow);
