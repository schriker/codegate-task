import ChatWrapper from '../../components/ChatWrapper/ChatWrapper';
import Message from '../../components/Message/Message';
import MessageInput from '../../components/MessageInput/MessageInput';

function Messages() {
  return (
    <ChatWrapper>
      <div className="overflow-auto flex-auto">
        <Message />
      </div>
      <MessageInput />
    </ChatWrapper>
  );
}

export default Messages;
