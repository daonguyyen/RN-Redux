/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import allReducers from './source/stores/stores'

const store = createStore(allReducers)
const ReduxApp = () => 
<Provider store={store}>
    <App/>
</Provider>
AppRegistry.registerComponent(appName, () => ReduxApp);
