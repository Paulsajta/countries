
export const SET_SEARCH = 'SET_SEARCH'
export const CLEAR_CONTROLS = 'CLEAR_CONTROLS'
export const SET_FILTER = 'SET_FILTER'

const initialState = {
    countryToSearch: '',
    filter: ''
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH: {
            return {
                ...state,
                countryToSearch: action.payload
            }
        }
        case SET_FILTER: {
            return {
                ...state,
                filter: action.payload
            }
        }
        case CLEAR_CONTROLS: {
            return initialState
        }
        default:
            return state
    }
}

export const setSearch = (payload) => ({type: SET_SEARCH, payload})
export const setFilter = (payload) => ({type: SET_FILTER, payload})
export const clearControls = () => ({type: CLEAR_CONTROLS})
export const searchSelector = (state) => state.search