import { useEffect, useRef } from 'react';
import { MessageContentPropsType } from '../../types/messageContent';

function MessageContent({
  owner,
  text,
  author,
  editMode,
  handleChange,
  handleEditMessage,
}: MessageContentPropsType) {
  const textareaRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (editMode && textareaRef.current) {
      const textarea = textareaRef.current;

      textarea.focus();
      textarea.setSelectionRange(textarea.value.length, textarea.value.length);
    }
  }, [editMode]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleEditMessage();
  };

  return (
    <div
      className={`rounded-2xl shadow-2xl ${
        owner
          ? 'shadow-blue-500/50 bg-gradient-to-r from-cyan-500 to-blue-500 text-[#fff]'
          : 'bg-[#fff] text-zinc-600'
      }  p-5 mb-2`}
    >
      <p className="text-sm font-bold">{author}</p>
      {editMode ? (
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            ref={textareaRef}
            className="bg-transparent focus:outline-none text-sm flex-auto w-full"
            value={text}
            onChange={handleChange}
          />
        </form>
      ) : (
        <p className="text-sm">{text}</p>
      )}
    </div>
  );
}

export default MessageContent;
