import React from 'react';
import { ipcRenderer } from 'electron';
import DashboardContainer from "./containers/DashboardContainer/DashboardContainer";

export default function App () {

    const sendNotification = () => {
        console.log("send notification => < >");
       ipcRenderer.send('notify' , "hello iskander")
    }

    return(
        <div className='App'>
            <DashboardContainer/>
        </div>
    );
}
