import {configureStore} from '@reduxjs/toolkit'
//to connet api and store
import { cryptoApi } from '../resources/cryptoApi';

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,

    }
})