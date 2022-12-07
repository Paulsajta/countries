import * as api from "../../config"
import axios from "axios";
import {addCountries, loadStatus, setErrors} from "./countriesReducer";
import {neighborsAction, setCurrentCountry, setErrorsCurrentCountries, setLoading} from "./currentCountryReducer";
import {filterByCode, searchByCountry} from "../../config";

export const asyncCountries = () => (dispatch) => {
    dispatch(loadStatus())
    axios({
        method: 'GET',
        url: api.ALL_COUNTRIES
    }).then(resp => dispatch(addCountries(resp.data)))
        .catch(error => dispatch(setErrors(error.message)))
}

export const asyncCurrentCountry = (name) => (dispatch) => {
    dispatch(setLoading())
    axios({
        method: 'GET',
        url: searchByCountry(name)
    }).then(resp => dispatch(setCurrentCountry(resp.data[0])))
        .catch(error => dispatch(setErrorsCurrentCountries(error.message)))
}

export const asyncNeighbors = (codes) => (dispatch) => {
    axios({
        method: 'GET',
        url: filterByCode(codes)
    }).then(resp => dispatch(neighborsAction(resp.data)))
        .catch(error => console.log(error))
}