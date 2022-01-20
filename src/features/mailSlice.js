import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
 sendMessageIsOpen: false,
};


export const mailSlice = createSlice({
  name: 'mail',
  initialState,

  reducers: {
    openSendMessage: (state) => {
    
      state.sendMessageIsOpen = true;
    },
    closwSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
 

});

export const { openSendMessage, closwSendMessage } = mailSlice.actions;


export const selectSendMessageIsOpen = state => state.mail.sendMessageIsOpen; 

export default mailSlice.reducer;
