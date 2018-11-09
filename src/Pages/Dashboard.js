import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Alert, Badge, ListGroup, PageHeader, Row} from "react-bootstrap";
import RandomTextRow from "../Components/RandomTextRow";

class Dashboard extends Component {
    static defaultProps = {};
    static propTypes = {};

    state = {
        filterString: ""
    };

    handleChange = (e) => {
      this.setState({filterString: e.target.value});
    };

    render() {
        const {filterString} = this.state;
        const {loading} = this.props.randomTexts;
        const filteredText = this.props.randomTexts.data.filter(t => t.name.includes(filterString));

        return (
            <div className={"dashboard-page"}>
                <PageHeader>Check out these amazing quotes. <small>You can pick your favorites!</small></PageHeader>

                <input className={"form-control search-texts"} type="text" onChange={this.handleChange} placeholder={"Search..."}/>

                {filterString && filteredText.length > 0 && <p>We have found <Badge>{filteredText.length}</Badge> random text{filteredText.length === 1? '': 's'} for you.</p>}

                {filteredText.length > 0 && <ListGroup>
                    {filteredText.map(t => <RandomTextRow randomText={t} />)}
                </ListGroup>}

                {filteredText.length === 0 && !loading && <Alert>No matches were found, try to modify your search.</Alert>}
                {loading && <label>Loading...</label>}
            </div>
        );
    }
}

export default connect(state => ({
    randomTexts: state.randomTexts
}))(Dashboard);
