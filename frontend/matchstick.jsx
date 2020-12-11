import React from 'react';
import ReactDOM from "react-dom";
import { fetchProfile, receiveProfile } from './actions/profile_actions'
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // TESTING START
        window.dispatch = store.dispatch;
        window.getState = store.getState;
        window.fetchProfile = fetchProfile; 
        window.receiveProfile = receiveProfile;
    // TESTING END

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});