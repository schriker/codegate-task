import dayjs from 'dayjs';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { MessageDetailsPropsType } from '../../types/messageDetails';
import { deleteMessage } from './messagesSlice';

function MessageDetails({ timestamp, isOwner, id }: MessageDetailsPropsType) {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteMessage(id));
  };

  return (
    <div className="flex text-sm text-zinc-400 space-x-1 pl-5">
      <span>{dayjs(timestamp).format('HH:mm')}</span>
      {isOwner && (
        <>
          <button className="border-l border-zinc-400 pl-1">edit</button>
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
