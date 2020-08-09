import { ALREADY_INDEXED, SEARCH_CITY } from "../actions"

export default store => next => action => {
    if(action.type === SEARCH_CITY && store.getState().cities.filter(city => city.name === action.city.name).length > 0) {
        next({
            type: ALREADY_INDEXED
        });
    } else {
        next(action);
    }
}