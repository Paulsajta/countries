
export const SET_CURRENT_COUNTRY = 'SET_CURRENT_COUNTRY'
export const SET_ERRORS = 'SET_ERRORS'
export const SET_LOADING = 'SET_LOADING'
export const CLEAR_CURRENT_COUNTRY = 'CLEAR_CURRENT_COUNTRY'
export const SET_NEIGHBORS = 'SET_NEIGHBORS'

const initialState = {
    countryInfo: null,
    loading: false,
    error: null,
    neighbors: []
}

export const currentCountryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_COUNTRY: {
            return {
                ...state,
                countryInfo: action.payload,
                loading: false,
                error: null
            }
        }
        case CLEAR_CURRENT_COUNTRY: {
            return {
                ...state,
                countryInfo: null
            }
        }
        case SET_ERRORS: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case SET_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }
        case SET_NEIGHBORS : {
            return {
                ...state,
                neighbors: action.payload
            }
        }
        default : {
            return state
        }
    }
}

export const setCurrentCountry = (payload) => ({type: SET_CURRENT_COUNTRY, payload})
export const setLoading = () => ({type: SET_LOADING})
export const setErrorsCurrentCountries = (payload) => ({type: SET_ERRORS, payload})
export const clearCurrentCountry = () => ({type: CLEAR_CURRENT_COUNTRY})
export const neighborsAction = (payload) => ({type: SET_NEIGHBORS, payload})

export const selectNeighbors = (state) => state.currentCountry.neighbors
export const selectCurrentCountry = (state) => state.currentCountry