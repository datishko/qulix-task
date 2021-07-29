import React from 'react';
import { useSelector } from 'react-redux';

const FramesSwitcher = () => {
    const appState = useSelector(state => state.appState);
    let frame = '';
    
    switch(appState.currentMenuItemId){
        case 1: frame = 'Тут будут входящие'; break;
        case 2: frame = 'Тут будут отправленные'; break;
        case 3: frame = 'Тут будут черновики'; break;
        case 4: frame = 'Тут будет корзина'; break;
    }

    return frame;
}

export default FramesSwitcher;