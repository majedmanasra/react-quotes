import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Col, Glyphicon, ListGroupItem, PageHeader, Row} from "react-bootstrap";
import {addToFavorite, removeFromFavorite} from "../Actions/randomTextsActions";
import {connect} from "react-redux";

class RandomTextRow extends Component {
    static defaultProps = {};
    static propTypes = {};
    state = {};

    toggleFavorite = (randomText) => {
        randomText.isFavorite? this.props.removeFromFavorite(randomText.id): this.props.addToFavorite(randomText.id);
        this.forceUpdate();
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
    addToFavorite: (name) => dispatch(addToFavorite(name)),
    removeFromFavorite: (name) => dispatch(removeFromFavorite(name))
}))(RandomTextRow);
