import { User } from './user';

export interface UsersState {
  currentUserId: number;
  users: User[];
}
