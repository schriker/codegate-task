import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { UsersState } from '../../types/usersSlice';
import { users } from './usersData';

const initialState: UsersState = {
  currentUserId: 0,
  data: users,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    switchUser: (state, action: PayloadAction<number>) => {
      state.currentUserId = action.payload;
    },
  },
});

export const { switchUser } = usersSlice.actions;

export const selectCurrentUserId = (state: RootState) =>
  state.users.currentUserId;

export const selectUserById = (state: RootState, userId: number) =>
  state.users.data.find((user) => user.id === userId);

export default usersSlice.reducer;
