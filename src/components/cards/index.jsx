import React from 'react';
import style from './style.module.scss';
import Card from '../card';
import { removeCity } from '../../store/actions';
import { connect } from 'react-redux';

function Cards({cities, removeCity}) {
    return (
        <div className={style.cards}>
            {cities.map((city, index) => (
                <Card
                    key={index}
                    cityName={city.name}
                    cityId={city.id}
                    max={city.main.temp_max}
                    min={city.main.temp_min}
                    humidity={city.main.humidity}
                    wind={city.wind.speed}
                    imageUrl={`https://openweathermap.org/img/wn/${city.weather[0].icon}.png`}
                    onClose={e => {
                        e.preventDefault();
                        removeCity(city);
                    }} />
            ))}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        cities: state.cities
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeCity: city => dispatch(removeCity(city))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);