import { apiUrl, apiKey } from '../../config';

// Constants

export const SEARCH_CITY = 'SEARCH_CITY';
export const REMOVE_CITY = 'REMOVE_CITY';
export const NOT_FOUND = 'NOT_FOUND';
export const NOT_CONNECTION = 'NOT_CONNECTION';
export const NOT_INDEXED = 'NOT_INDEXED';
export const HIDE_ERROR = 'HIDE_ERROR';

// Actions creators

export function searchCity(city) {
    return dispatch => {
        fetch(`${apiUrl}q=${city}&appid=${apiKey}&units=metric`)
            .then(res => res.json())
            .then(json => {
                if(json.cod === 200) {
                    dispatch({
                        type: SEARCH_CITY,
                        city: json
                    })
                } else if(json.cod === 404) {
                    dispatch({
                        type: NOT_FOUND,
                        city
                    })
                }
            })
            .catch(err => {
                dispatch({
                    type: NOT_CONNECTION,
                    city
                })
            })
    }
}

export function removeCity(city) {
    return {
        type: REMOVE_CITY,
        city
    }
}

export function notIndexed(city) {
    return {
        type: NOT_INDEXED,
        city
    }
}

export function hideError() {
    return {
        type: HIDE_ERROR
    }
}