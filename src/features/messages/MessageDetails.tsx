import dayjs from 'dayjs';
import { MessageDetailsPropsType } from '../../types/messageDetails';

function MessageDetails({ timestamp, isOwner }: MessageDetailsPropsType) {
  return (
    <div className="flex text-sm text-zinc-400 space-x-1 pl-5">
      <span>{dayjs(timestamp).format('HH:mm')}</span>
      {isOwner && (
        <>
          <button className="border-l border-zinc-400 pl-1">edit</button>
          <button className="border-l border-zinc-400 pl-1">delete</button>
        </>
      )}
    </div>
  );
}

export default MessageDetails;
