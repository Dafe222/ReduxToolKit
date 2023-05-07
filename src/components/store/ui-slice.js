import { createSlice } from "@reduxjs/toolkit";



const uiSlice = createSlice({
    name: 'ui',
    initialState: {notification: null},

    reducers: {
        shwoNotification(state, action){
            state.notification = {
                message: action.payload.message, 
                type: action.payload.type,
                open: action.payload.open,
            }
        }
    }
}) 
export const uiActons = uiSlice.actions; 
export default uiSlice;