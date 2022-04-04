import { PhotographIcon } from '@heroicons/react/solid';
import { MessageImagePropsType } from '../../types/messageImage';

function MessageImage({ upload }: MessageImagePropsType) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.files) {
      const reader = new FileReader();
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onloadend = (photo) => {
        upload(photo.target?.result as string);
      };
    }
  };

  return (
    <div>
      <label
        className="w-10 h-10 bg-zinc-400 rounded-full ml-2 flex justify-center items-center cursor-pointer"
        htmlFor="photo"
      >
        <PhotographIcon className="h-5 w-5 text-[#fff]" />
      </label>
      <input
        id="photo"
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleChange}
      />
    </div>
  );
}

export default MessageImage;
