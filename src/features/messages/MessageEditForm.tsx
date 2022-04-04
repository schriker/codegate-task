import { useEffect, useRef } from 'react';
import { MessageEditFormPropsType } from '../../types/messageEditForm';

function MessageEditForm({
  editMode,
  handleChange,
  handleEditMessage,
  text,
}: MessageEditFormPropsType) {
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
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        ref={textareaRef}
        className="bg-transparent focus:outline-none text-sm w-full"
        value={text}
        onChange={handleChange}
      />
    </form>
  );
}

export default MessageEditForm;
