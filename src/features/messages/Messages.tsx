import { useAppSelector } from '../../app/hooks';
import ChatWrapper from '../../components/ChatWrapper/ChatWrapper';
import Message from '../../components/Message/Message';
import MessageInput from '../../components/MessageInput/MessageInput';
import { selectCurrentUserId } from '../users/usersSlice';
import { selectMessages } from './messagesSlice';

function Messages() {
  const messages = useAppSelector(selectMessages);
  const currentUserId = useAppSelector(selectCurrentUserId);

  return (
    <ChatWrapper>
      <div className="overflow-auto flex-auto">
        {messages.map((message) => (
          <Message
            data={message}
            key={message.id}
            currentUserId={currentUserId}
          />
        ))}
      </div>
      <MessageInput />
    </ChatWrapper>
  );
}

export default Messages;
