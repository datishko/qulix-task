import React from 'react';
import { useSelector } from 'react-redux';
import { Backdrop, CircularProgress } from '@material-ui/core';
import FramesSwitcher from '../../FramesSwitcher/FramesSwitcher';
import './MainFrame.css';

const MainFrame = () => {
    const appState = useSelector(state => state.appState);

    return  <div className="MainFrame">
                {
                    appState.loading ? 
                        <Backdrop className="BackDrop" open={true}>
                            <CircularProgress color="inherit" />
                        </Backdrop> :
                    appState.error ? 
                    appState.browserLanguage === 'ru' ?
                        <p>Произошел сбой при получении данных, попробуйте еще раз</p> :
                        <p>Failed to receive data, please try again</p> :
                    <FramesSwitcher />
                }
            </div>
}

export default MainFrame;