import {proxy} from 'valtio'
import {FormContent} from "../domain/FormContent";

class AppState {
    isDisplayForm: boolean = false;
}

export const formContent = proxy(new FormContent());

export const appState = proxy(new AppState());




