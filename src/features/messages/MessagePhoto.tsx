import { MessagePhotoPropsType } from '../../types/messagePhoto';

function MessagePhoto({ owner, src, author }: MessagePhotoPropsType) {
  return (
    <img
      className={`inline-block h-6 w-6 rounded-full ${
        owner ? 'ml-4' : 'mr-4'
      }`}
      src={src}
      alt={author}
    />
  );
}

export default MessagePhoto;
