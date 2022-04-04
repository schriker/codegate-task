import { MessageType } from './message';

export type MessageContentPropsType = {
  owner: boolean;
  author: string;
  text: string;
  type: MessageType;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleEditMessage: () => void;
  editMode: boolean;
};
