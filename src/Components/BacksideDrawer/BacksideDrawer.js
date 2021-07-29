import React from 'react';
import { SwipeableDrawer } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { drawerToggleAction } from '../../ReduxLogic/Actions';
import DrawerList from '../DrawerList/DrawerList';


const BacksideDrawer = () => {
    const appState = useSelector(state => state.appState);
    const dispatch = useDispatch();

    return  <SwipeableDrawer         
    anchor='left'
    open={appState.drawerIsOpen}
    onClose={e => {dispatch(drawerToggleAction())}}
    onOpen={e => {dispatch(drawerToggleAction())}}> 
      <DrawerList />
  </SwipeableDrawer>
}

export default BacksideDrawer;