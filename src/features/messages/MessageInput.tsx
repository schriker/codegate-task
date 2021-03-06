import { ChevronRightIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Message, MessageType } from '../../types/message';
import { selectCurrentUserId } from '../users/usersSlice';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addMessage } from './messagesSlice';
import MessageImage from './MessageImage';

function MessageInput() {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const currentUserId = useAppSelector(selectCurrentUserId);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value.trim().length === 0) return;

    const message: Message = {
      id: uuidv4(),
      authorId: currentUserId,
      timestamp: new Date().toUTCString(),
      type: MessageType.TEXT,
      text: value.trim(),
    };
    dispatch(addMessage(message));
    setValue('');
  };

  const handleImageUpload = (image: string) => {
    const message: Message = {
      id: uuidv4(),
      authorId: currentUserId,
      timestamp: new Date().toUTCString(),
      type: MessageType.PHOTO,
      text: image,
    };
    dispatch(addMessage(message));
  };

  return (
    <div className="p-4">
      <form className="flex w-full" onSubmit={handleSubmit}>
        <input
          className="rounded-xl px-4 text-sm flex-auto"
          type="text"
          placeholder="Message..."
          value={value}
          onChange={handleChange}
        />
        <button
          className="bg-sky-600 rounded-full w-10 h-10 ml-2 flex justify-center items-center"
          type="submit"
        >
          <ChevronRightIcon className="h-6 w-6 text-[#fff]" />
        </button>
        <MessageImage upload={handleImageUpload} />
      </form>
    </div>
  );
}

export default MessageInput;
