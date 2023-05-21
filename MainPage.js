'use client'

import 'antd/dist/reset.css';
import MapWidget from './Widget/MapWidget';
import { Provider } from 'react-redux';
// @ts-ignore
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../../store/store';

export default function MainPage() {
    return (
        <Provider store={store}>
            {/* <PersistGate loading={null} persistor={persistor}> */}
                <MapWidget />
            {/* </PersistGate> */}
        </Provider>
    )
}
