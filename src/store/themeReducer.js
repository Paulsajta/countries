

export const CHANGE_THEME = 'CHANGE_THEME'

const initialState = {
    theme: 'light'
}


export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME: {
            if (state.theme === 'light') {
                return {
                    ...state,
                    theme: 'dark'
                }
            } else {
                return {
                    ...state,
                    theme: 'light'
                }
            }
        }
        default: {
            return state
        }
    }
}

export const themeAction = () => ({type: CHANGE_THEME})