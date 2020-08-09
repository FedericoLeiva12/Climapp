import { REMOVE_CITY, SEARCH_CITY, NOT_FOUND, NOT_CONNECTION, NOT_INDEXED, HIDE_ERROR } from '../actions';

const initialState = {
    cities: [],
    error: false,
    errorMessage: '',
    hideError: false
};

export default (state=initialState, action) => {
    switch(action.type) {
        case SEARCH_CITY:
            return {
                ...state,
                cities: [...state.cities, action.city]
            }
        case REMOVE_CITY:
            return {
                ...state,
                cities: state.cities.filter(city => city.id !== action.payload.city.id),
                hideError: action.payload.hideError
            }
        case NOT_CONNECTION:
            return {
                ...state,
                error: true,
                errorMessage: 'Error de conexión. Comprueba tu internet y vuelve a intentarlo.'
            }
        // ERRORS
        case NOT_FOUND:
            return {
                ...state,
                error: true,
                errorMessage: `No se ha encontrado la ciudad ${action.city}.`
            }
        case NOT_INDEXED:
            return {
                ...state,
                error: true,
                errorMessage: `La ciudad requerida no ha sido indexada.`
            }
        case HIDE_ERROR:
            return {
                ...state,
                error: false,
                errorMessage: '',
                hideError: false
            }
        default:
            return state;
    }
}