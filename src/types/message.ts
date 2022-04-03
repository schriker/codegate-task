export interface Message {
  id: number;
  text: string;
  timestamp: number;
  authorId: number;
}

export type MessagePropsType = {
  data: Message;
  currentUserId: number;
};
