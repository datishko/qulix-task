import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { choiseMenuItemAction, getInboxAction, getSentAction, getDraftsAction, getTrashAction } from '../../ReduxLogic/Actions';
import './DrawerList.css';

const DrawerList = () => {
    const appState = useSelector(state => state.appState);
    const dispatch = useDispatch();

    const onMenuItemSelect = itemId => {
        dispatch(choiseMenuItemAction(itemId));
        switch(itemId){
            case 1: dispatch(getInboxAction()); break;
            case 2: dispatch(getSentAction()); break;
            case 3: dispatch(getDraftsAction()); break;
            case 4: dispatch(getTrashAction()); break;
        }        
    }

    return  <div className="DrawerList">
                {
                    appState.leftMenuItems.map(item => {
                        return  <ListItem 
                                        button key={item.id} 
                                        onClick={e => onMenuItemSelect(item.id)} 
                                        selected={appState.currentMenuItemId === item.id ? true : false}>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText 
                                        primary={
                                                    appState.browserLanguage === 'ru' ? 
                                                    item.name_ru :
                                                    item.name_en
                                                } />
                                </ListItem>
                    })
                }
            </div>
}

export default DrawerList;