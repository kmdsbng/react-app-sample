import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactHookFormSample from "./react-hook-form-sample";
import {useSnapshot} from "valtio";
import {appState} from "./store/store";

function App() {
    const appStateSnapshot = useSnapshot(appState);

    return (
        <>
            {
                !appStateSnapshot.isDisplayForm &&
                <span>Loading data...</span>
            }
            {
                appStateSnapshot.isDisplayForm &&
                <ReactHookFormSample/>
            }
        </>
    );
}

export default App;



