//import { google } from "googleapis";
import $ from 'jquery';

export const getBrowserLanguage = () => {
   const result = navigator.language || navigator.userLanguage;
    return result;
}

export const getLocationData = async browserLanguage => {
    const language = browserLanguage === 'ru' ? browserLanguage : 'en';
        
    try{
        const ipAddressInfo = await $.get('https://api.my-ip.io/ip.json');       
        const locationInfo = await $.get(`https://ipwhois.app/json/${ipAddressInfo.ip}?lang=${language}`);
        return locationInfo;
    }
    catch(error){
        return {};
    }
}

export const getUserInfoFromApi = async () => {
    return [];
}

export const getInboxFromApi = async () => {
    return [];
}

export const getSentFromApi = async () => {
    return [];
}

export const getDraftsFromApi = async () => {
    return [];
}

export const getTrashFromApi = async () => {
    return [];
}