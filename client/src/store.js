import {configureStore} from'@reduxjs/toolkit'
import userSlice from './slices/userSlices'
import eventSlice from './slices/eventSlice'
import productSlice from './slices/productSlice'
import cartSlice from './slices/cardSlice'
export default configureStore({reducer:{user:userSlice, event:eventSlice , product:productSlice,cart:cartSlice}})