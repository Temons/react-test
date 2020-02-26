import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import ClubstoreService from './services/clubstore-service';
import { ClubstoreServiceProvider } from './components/clubstore-service-context';

import store from './store';

const clubstoreService = new ClubstoreService();

ReactDOM.render(
    <Provider store={store}>
        <ClubstoreServiceProvider value={clubstoreService}>
            <App />        
        </ClubstoreServiceProvider>
    </Provider>,
    document.getElementById('root')
) 