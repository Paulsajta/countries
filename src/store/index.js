import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {themeReducer} from "./themeReducer";
import {countriesReducer} from "./countries/countriesReducer";
import {searchReducer} from "./searchReducer";
import {currentCountryReducer} from "./countries/currentCountryReducer";

const rootReducer = combineReducers({
    theme: themeReducer,
    countries: countriesReducer,
    search: searchReducer,
    currentCountry: currentCountryReducer,
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))