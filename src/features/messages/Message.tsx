import { useAppSelector } from '../../hooks/useAppSelector';
import { selectUserById } from '../users/usersSlice';
import { MessagePropsType } from '../../types/message';
import MessageDetails from './MessageDetails';
import MessageContent from './MessageContent';
import MessagePhoto from './MessagePhoto';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { editMessage } from './messagesSlice';

function Message({
  data: { authorId, id, text, timestamp },
  currentUserId,
}: MessagePropsType) {
  const author = useAppSelector((state) => selectUserById(state, authorId));
  const owner = author?.id === currentUserId;

  const [editMode, setEditMode] = useState(false);
  const toggleEditMode = () => {
    setEditMode((prevState) => !prevState);
  };

  const [value, setValue] = useState(text);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const dispatch = useAppDispatch();
  const handleEditMessage = () => {
    if (!value.trim().length) return;
    setEditMode(false);
    dispatch(
      editMessage({
        id,
        authorId,
        timestamp,
        text: value.trim(),
      })
    );
  };

  return author ? (
    <div
      className={`flex my-10 mx-12 ${owner ? 'flex-row-reverse' : 'flex-row'}`}
    >
      <MessagePhoto src={author.photo} author={author.name} owner={owner} />
      <div className={`${editMode ? 'flex-auto' : ''}`}>
        <MessageContent
          editMode={editMode}
          owner={owner}
          author={author.name}
          text={value}
          handleChange={handleChange}
          handleEditMessage={handleEditMessage}
        />
        <MessageDetails
          editMode={editMode}
          toggleEditMode={toggleEditMode}
          handleEditMessage={handleEditMessage}
          owner={owner}
          timestamp={timestamp}
          id={id}
        />
      </div>
    </div>
  ) : null;
}

export default Message;
