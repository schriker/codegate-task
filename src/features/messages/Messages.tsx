import { useAppSelector } from '../../hooks/useAppSelector';
import MessagesWrapper from './MessagesWrapper';
import Message from './Message';
import MessageInput from './MessageInput';
import { selectCurrentUserId } from '../users/usersSlice';
import { selectMessages } from './messagesSlice';
import { useEffect, useRef } from 'react';

function Messages() {
  const divRef = useRef<HTMLDivElement>(null);
  const messages = useAppSelector(selectMessages);
  const currentUserId = useAppSelector(selectCurrentUserId);
  const lastMessage = messages[messages.length - 1]?.id;

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  }, [lastMessage]);

  return (
    <MessagesWrapper>
      <div ref={divRef} className="overflow-auto flex-auto">
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
