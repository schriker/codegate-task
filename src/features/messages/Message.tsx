import { useAppSelector } from '../../hooks/useAppSelector';
import { selectUserById } from '../users/usersSlice';
import { MessagePropsType } from '../../types/message';
import MessageDetails from './MessageDetails';
import MessageContent from './MessageContent';
import MessagePhoto from './MessagePhoto';

function Message({
  data: { authorId, id, text, timestamp },
  currentUserId,
}: MessagePropsType) {
  const author = useAppSelector((state) => selectUserById(state, authorId));
  const isOwner = author?.id === currentUserId;

  return author ? (
    <div
      className={`flex my-10 mx-12 ${
        isOwner ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      <MessagePhoto src={author.photo} author={author.name} isOwner={isOwner} />
      <div>
        <MessageContent isOwner={isOwner} author={author.name} text={text} />
        <MessageDetails isOwner={isOwner} timestamp={timestamp} />
      </div>
    </div>
  ) : null;
}

export default Message;
