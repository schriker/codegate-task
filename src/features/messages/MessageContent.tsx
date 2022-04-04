import { MessageType } from '../../types/message';
import { MessageContentPropsType } from '../../types/messageContent';
import MessageEditForm from './MessageEditForm';

function MessageContent({
  owner,
  text,
  author,
  editMode,
  type,
  handleChange,
  handleEditMessage,
}: MessageContentPropsType) {
  return type === MessageType.PHOTO ? (
    <div>
      <img className="w-full h-40 object-cover mb-2 rounded-lg" src={text} alt="" />
    </div>
  ) : (
    <div
      className={`rounded-2xl shadow-2xl ${
        owner
          ? 'shadow-blue-500/50 bg-gradient-to-r from-cyan-500 to-blue-500 text-[#fff]'
          : 'bg-[#fff] text-zinc-600'
      }  p-5 mb-2`}
    >
      <p className="text-sm font-bold">{author}</p>
      {editMode ? (
        <MessageEditForm
          text={text}
          editMode={editMode}
          handleChange={handleChange}
          handleEditMessage={handleEditMessage}
        />
      ) : (
        <p className="text-sm">{text}</p>
      )}
    </div>
  );
}

export default MessageContent;
