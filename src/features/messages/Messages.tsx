import { useAppSelector } from '../../hooks/useAppSelector';
import MessagesWrapper from './MessagesWrapper';
import Message from './Message';
import MessageInput from './MessageInput';
import { selectCurrentUserId } from '../users/usersSlice';
import { selectMessages } from './messagesSlice';

function Messages() {
  const messages = useAppSelector(selectMessages);
  const currentUserId = useAppSelector(selectCurrentUserId);

  return (
    <MessagesWrapper>
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
    </MessagesWrapper>
  );
}

export default Messages;
