import { AppBar, Toolbar, IconButton, Typography  } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Image from 'material-ui-image';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { drawerToggleAction, getLocationDataAction, getInboxAction } from "../../ReduxLogic/Actions";
import Logo from '../Pics/logotype.png';
import './CustomToolBar.css';

const CustomToolbar = () => {
    const appState = useSelector(state => state.appState);
    const dispatch = useDispatch();

    useEffect(() => {          
        dispatch(getLocationDataAction()); 
        dispatch(getInboxAction());           
    }, []);  

    return <AppBar position="static">
                <Toolbar className="Toolbar">
                   <IconButton color="inherit" onClick={e => {dispatch(drawerToggleAction())}}>
                        <MenuIcon />
                   </IconButton>                                                   
                   <div>                       
                   <Typography>{appState.locationData.city}</Typography>
                   <Image src={appState.locationData.country_flag} aspectRatio={1/0.5} />
                   <Typography>{appState.locationData.country}</Typography>
                   </div>                   
                </Toolbar>                               
            </AppBar>
}

export default CustomToolbar;