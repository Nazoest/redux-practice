import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./App/store"
import {Provider} from "react-redux"
import { fetchUsers } from './features/users/usersSlice';
store.dispatch(fetchUsers())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


