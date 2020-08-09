import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Cards from '../components/cards';
import { notIndexed } from '../store/actions';

function City({city, notIndexed}) {
    if(city) {
        return (
            <div>
                <Cards cities={[city]} />
            </div>
        )
    } else {
        notIndexed();
        return (
            <Redirect to='/' />
        )
    }
}

function mapStateToProps(state, ownProps) {
    const id = parseInt(ownProps.match.params.id);
    console.log(id);
    return {
        city: state.cities.filter(city => city.id === id)[0]
    }
}

function mapDispatchToProps(dispatch) {
    return {
        notIndexed: () => dispatch(notIndexed())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(City);