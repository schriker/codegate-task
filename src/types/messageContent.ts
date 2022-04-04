export type MessageContentPropsType = {
  owner: boolean;
  author: string;
  text: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleEditMessage: () => void;
  editMode: boolean;
};
