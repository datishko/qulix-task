import {
    DATA_LOADING,
    LOADING_ERROR,
    DRAWER_TOGGLE,
    CHOISE_MENU_ITEM,
    SET_LOCATION_DATA,
    SET_INBOX,
    SET_SENT,
    SET_DRAFTS,
    SET_TRASH
} from './Constantes';
import { getBrowserLanguage, getLocationData, getInboxFromApi, getSentFromApi, getDraftsFromApi, getTrashFromApi } from './SupportingFunctions';


export const drawerToggleAction = () => {
    return {type: DRAWER_TOGGLE, payload: null};
}

export const choiseMenuItemAction = menuItemId => {
    return {type: CHOISE_MENU_ITEM, payload: menuItemId};
}

const setLocationDataAction = locationData => {
    return {type: SET_LOCATION_DATA, payload: locationData};
}

export const getLocationDataAction = () => {
    return async (dispatch) => {
        const browserLanguage = getBrowserLanguage();
        const locationData = await getLocationData(browserLanguage);       
        dispatch(setLocationDataAction(locationData));
    }
}
const dataLoadingAction = () => {
    return {type: DATA_LOADING, payload: true};
}
const loadingErrorAction = () => {
    return {type: LOADING_ERROR, payload: true};
}
const setInboxAction = inboxData => {
    return {type: SET_INBOX, payload: inboxData}
}

const setSentAction = sentData => {
    return {type: SET_SENT, payload: sentData}
}

const setDraftsAction = draftsData => {
    return {type: SET_DRAFTS, payload: draftsData}
}

const setTrashAction = trashData => {
    return {type: SET_TRASH, payload: trashData}
}

export const getInboxAction = () => {
    return async (dispatch) => {
        dispatch(dataLoadingAction());
        try{
            const data = await getInboxFromApi();
            dispatch(setInboxAction(data));
        }
        catch(error){
            dispatch(setInboxAction([]));
            dispatch(loadingErrorAction());
        }        
    }
}

export const getSentAction = () => {
    return async (dispatch) => {
        dispatch(dataLoadingAction());
        try{
            const data = await getSentFromApi();
            dispatch(setSentAction(data));
        }
        catch(error){
            dispatch(setSentAction([]));
            dispatch(loadingErrorAction());
        }        
    }
}

export const getDraftsAction = () => {
    return async (dispatch) => {
        dispatch(dataLoadingAction());
        try{
            const data = await getDraftsFromApi();
            dispatch(setDraftsAction(data));
        }
        catch(error){
            dispatch(setDraftsAction([]));
            dispatch(loadingErrorAction());
        }        
    }
}

export const getTrashAction = () => {
    return async (dispatch) => {
        dispatch(dataLoadingAction());
        try{
            const data = await getTrashFromApi();
            dispatch(setTrashAction(data));
        }
        catch(error){
            dispatch(setTrashAction([]));
            dispatch(loadingErrorAction());
        }        
    }
}