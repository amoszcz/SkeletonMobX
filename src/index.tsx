import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RootState, rootStore } from './app/rootState';
export const Store = createContext<{ rootStore: RootState }>({ rootStore });

ReactDOM.render(
    <React.StrictMode>
        <Store.Provider value={{ rootStore: rootStore }}>
            <App />
        </Store.Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
