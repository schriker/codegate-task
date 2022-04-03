import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Message } from '../../types/message';
import { MessagesState } from '../../types/messagesSlice';
import { messages } from './messagesData';

const initialState: MessagesState = {
  data: messages,
};

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.data.push(action.payload);
    },
    deleteMessage: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter(
        (message) => message.id !== action.payload
      );
    },
  },
});

export const { addMessage, deleteMessage } = messagesSlice.actions;

export const selectMessages = (state: RootState) => state.messages.data;

export default messagesSlice.reducer;
