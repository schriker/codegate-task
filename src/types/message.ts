export interface Message {
  id: string;
  text: string;
  timestamp: string;
  authorId: number;
}

export type MessagePropsType = {
  data: Message;
  currentUserId: number;
};
