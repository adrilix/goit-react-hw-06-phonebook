import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from 'components/app/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/srore'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
            <App />
    </Provider>


);