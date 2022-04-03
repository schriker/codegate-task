import { useAppSelector } from '../../hooks/useAppSelector';
import { selectUserById } from '../users/usersSlice';
import { MessagePropsType } from '../../types/message';
import dayjs from 'dayjs';

function Message({
  data: { authorId, id, text, timestamp },
  currentUserId,
}: MessagePropsType) {
  const author = useAppSelector((state) => selectUserById(state, authorId));
  const isOwner = author?.id === currentUserId;

  return (
    <div
      className={`flex my-10 mx-12 ${
        isOwner ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      <img
        className={`inline-block h-6 w-6 rounded-full ${
          isOwner ? 'ml-4' : 'mr-4'
        }`}
        src={author?.photo}
        alt={author?.name}
      />
      <div>
        <div
          className={`rounded-2xl shadow-2xl ${
            isOwner
              ? 'shadow-blue-500/50 bg-gradient-to-r from-cyan-500 to-blue-500 text-[#fff]'
              : 'bg-[#fff] text-zinc-600'
          }  p-5 mb-2`}
        >
          <p className="text-sm font-bold">{author?.name}</p>
          <p className="text-sm">{text}</p>
        </div>
        <div className="flex text-sm text-zinc-400 space-x-1 pl-5">
          <span>{dayjs(timestamp).format('HH:mm')}</span>
          {isOwner && (
            <>
              <button className="border-l border-zinc-400 pl-1">edit</button>
              <button className="border-l border-zinc-400 pl-1">delete</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Message;
