export type MessageDetailsPropsType = {
  id: string;
  owner: boolean;
  timestamp: string;
  editMode: boolean;
  handleEditMessage: () => void;
  toggleEditMode: () => void;
};
