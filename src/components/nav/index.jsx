import React from 'react';
import SearchBar from '../searchbar';
import style from './style.module.scss';
import { connect } from 'react-redux';
import { searchCity } from '../../store/actions';
import { Link } from 'react-router-dom';
import ErrorContainer from '../errorContainer';

function Nav({searchCity}) {
    return (
        <div>
            <ErrorContainer />
            <div className={style.nav}>
                <div className={style.left}>
                    <Link to="/" className={style.brand}>Climapp</Link>
                </div>
                <div className={style.right}>
                    <SearchBar onSearch={searchCity}/>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        searchCity: city => dispatch(searchCity(city))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);