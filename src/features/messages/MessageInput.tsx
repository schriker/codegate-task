import { ChevronRightIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Message } from '../../types/message';
import { selectCurrentUserId } from '../users/usersSlice';
import { addMessage } from './messagesSlice';
import { v4 as uuidv4 } from 'uuid';

function MessageInput() {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');
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
      text: value.trim(),
    };

    dispatch(addMessage(message));
    setValue('');
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
      </form>
    </div>
  );
}

export default MessageInput;
