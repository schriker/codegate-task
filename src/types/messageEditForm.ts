export type MessageEditFormPropsType = {
  editMode: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleEditMessage: () => void;
  text: string;
};
