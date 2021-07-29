import { combineReducers } from "redux";
import { appState } from "./InitialStates";
import { 
        CHOISE_MENU_ITEM, 
        DATA_LOADING, 
        DRAWER_TOGGLE, 
        LOADING_ERROR, 
        SET_LOCATION_DATA,       
        SET_INBOX,
        SET_SENT,
        SET_DRAFTS,
        SET_TRASH
} from './Constantes';
import { getBrowserLanguage } from "./SupportingFunctions";

const appReducer = (state = appState, action) => {
    const {type, payload} = action;
    switch(type){
        case DRAWER_TOGGLE:                
                return {...state, drawerIsOpen: !state.drawerIsOpen};
        case CHOISE_MENU_ITEM:
                return {...state, currentMenuItemId: payload};
        case SET_LOCATION_DATA:
                return {...state, locationData: payload};
        case DATA_LOADING:
                return {...state, loading: payload, error: false};
        case LOADING_ERROR: 
                return {...state, error: payload, loading: false};
        case SET_INBOX: 
                return {...state, loading: false, inbox: payload};
        case SET_SENT: 
                return {...state, loading: false, sent: payload};
        case SET_DRAFTS: 
                return {...state, loading: false, drafts: payload};
        case SET_TRASH: 
                return {...state, loading: false, trash: payload};
        default: 
                return {...state, browserLanguage: getBrowserLanguage()}; 
    }
}

export const reducers = combineReducers({
    appState: appReducer
});