import { User } from './user';

export interface UsersState {
  currentUserId: number;
  data: User[];
}
