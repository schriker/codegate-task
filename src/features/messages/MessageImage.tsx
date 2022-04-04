import { PhotographIcon } from '@heroicons/react/solid';

function MessageImage() {
  return (
    <div>
      <label
        className="w-10 h-10 bg-zinc-400 rounded-full ml-2 flex justify-center items-center cursor-pointer"
        htmlFor="photo"
      >
        <PhotographIcon className="h-5 w-5 text-[#fff]" />
      </label>
      <input id="photo" type="file" className="hidden" accept="image/*" />
    </div>
  );
}

export default MessageImage;
