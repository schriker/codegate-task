import { MessagePhotoPropsType } from '../../types/messagePhoto';

function MessagePhoto({ isOwner, src, author }: MessagePhotoPropsType) {
  return (
    <img
      className={`inline-block h-6 w-6 rounded-full ${
        isOwner ? 'ml-4' : 'mr-4'
      }`}
      src={src}
      alt={author}
    />
  );
}

export default MessagePhoto;
