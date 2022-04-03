import { ChatWrapperPropsType } from '../../types/chatWrapper';

function ChatWrapper({ children }: ChatWrapperPropsType) {
  return (
    <div className="h-full mt-3 px-12 border border-zinc-200 rounded-t-xl overflow-auto">
      {children}
    </div>
  );
}

export default ChatWrapper;
