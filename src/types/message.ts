export enum MessageType {
  PHOTO,
  TEXT,
}

export interface Message {
  id: string;
  type: MessageType;
  text: string;
  timestamp: string;
  authorId: number;
}

export type MessagePropsType = {
  data: Message;
  currentUserId: number;
};
