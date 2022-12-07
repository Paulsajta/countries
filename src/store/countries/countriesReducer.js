

export const ADD_COUNTRIES = 'ADD_COUNTRIES'
export const LOAD_STATUS = 'LOAD_STATUS'
export const SET_ERRORS = 'SET_ERRORS'

const initialState = {
    allCountries: [],
    loadStatus: 'init',
    loading: false,
    errors: null,
}

export const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COUNTRIES : {
            return {
                ...state,
                loading: false,
                loadStatus: 'ok',
                allCountries: action.payload
            }
        }
        case SET_ERRORS: {
            return {
                ...state,
                loading: false,
                loadStatus: 'failed',
                errors: action.payload
            }
        }
        case LOAD_STATUS: {
            return {
                ...state,
                loading: true,
                loadStatus: 'loading'
            }
        }
        default: {
            return state
        }
    }
}

export const addCountries = (payload) => ({type: ADD_COUNTRIES, payload})
export const setErrors = (payload) => ({type: SET_ERRORS, payload})
export const loadStatus = () => ({type: LOAD_STATUS})

export const countriesSelector = (state) => state.countries

export const countriesFilteredSelector = (state, {countryToSearch = '', filter = ''}) => {

    if (filter.length > 0) {
        return state.countries.allCountries.filter(country => {
            if(country.region === filter && country.name.toLowerCase().includes(countryToSearch.toLowerCase())) {
                return true
            }
        })

    } else {
        return state.countries.allCountries.filter(country => (
            country.name.toLowerCase().includes(countryToSearch.toLowerCase())
        ))
    }
}
