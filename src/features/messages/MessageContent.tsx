import { MessageContentPropsType } from '../../types/messageContent';

function MessageContent({ isOwner, text, author }: MessageContentPropsType) {
  return (
    <div
      className={`rounded-2xl shadow-2xl ${
        isOwner
          ? 'shadow-blue-500/50 bg-gradient-to-r from-cyan-500 to-blue-500 text-[#fff]'
          : 'bg-[#fff] text-zinc-600'
      }  p-5 mb-2`}
    >
      <p className="text-sm font-bold">{author}</p>
      <p className="text-sm">{text}</p>
    </div>
  );
}

export default MessageContent;
