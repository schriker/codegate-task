import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Message } from '../../types/message';
import { MessagesState } from '../../types/messagesSlice';

const initialState: MessagesState = {
  data: [],
};

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.data.push(action.payload);
    },
    deleteMessage: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter(
        (message) => message.id !== action.payload
      );
    },
    editMessage: (state, action: PayloadAction<Message>) => {
      state.data = state.data.map((message) => {
        if (message.id !== action.payload.id) return message;
        return action.payload;
      });
    },
  },
});

export const { addMessage, deleteMessage, editMessage } = messagesSlice.actions;

export const selectMessages = (state: RootState) => state.messages.data;

export default messagesSlice.reducer;
