import { ChatWrapperPropsType } from '../../types/chatWrapper';

function ChatWrapper({ children }: ChatWrapperPropsType) {
  return (
    <div className="flex flex-col flex-grow-0 mt-3 border border-zinc-200 rounded-t-xl overflow-hidden">
      {children}
    </div>
  );
}

export default ChatWrapper;
