import { MessagesWrapperPropsType } from '../../types/messagesWrapperP';

function MessagesWrapper({ children }: MessagesWrapperPropsType) {
  return (
    <div className="flex flex-col flex-auto  mt-3 border border-zinc-200 rounded-t-xl overflow-hidden">
      {children}
    </div>
  );
}

export default MessagesWrapper;
