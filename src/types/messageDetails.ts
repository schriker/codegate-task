import { MessageType } from './message';

export type MessageDetailsPropsType = {
  id: string;
  owner: boolean;
  type: MessageType;
  timestamp: string;
  editMode: boolean;
  handleEditMessage: () => void;
  toggleEditMode: () => void;
};
