import dayjs from 'dayjs';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { MessageType } from '../../types/message';
import { MessageDetailsPropsType } from '../../types/messageDetails';
import { deleteMessage } from './messagesSlice';

function MessageDetails({
  timestamp,
  owner,
  id,
  editMode,
  type,
  toggleEditMode,
  handleEditMessage,
}: MessageDetailsPropsType) {
  const dispatch = useAppDispatch();

  const handleEdit = () => {
    if (editMode) {
      handleEditMessage();
    } else {
      toggleEditMode();
    }
  };

  const handleDelete = () => {
    dispatch(deleteMessage(id));
  };

  return (
    <div className="flex text-sm text-zinc-400 space-x-1 pl-5">
      <span>{dayjs(timestamp).format('HH:mm')}</span>
      {owner && (
        <>
          {type === MessageType.TEXT && (
            <button
              className="border-l border-zinc-400 pl-1"
              onClick={handleEdit}
            >
              {editMode ? 'save' : 'edit'}
            </button>
          )}
          <button
            className="border-l border-zinc-400 pl-1"
            onClick={handleDelete}
          >
            delete
          </button>
        </>
      )}
    </div>
  );
}

export default MessageDetails;
