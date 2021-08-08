import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactHookFormSample from "./react-hook-form-sample";
import {appState, formContent} from "./store/store";
import App from "./App";


formContent.example = "aaa";
formContent.exampleRequired = "bbbbb";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


setTimeout(
    () => {
        console.log("showForm");
        formContent.example = "updated";
        formContent.exampleRequired = "updated2";
        appState.isDisplayForm = true;
    }
    , 5000
);

