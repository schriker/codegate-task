import { ChevronRightIcon } from '@heroicons/react/solid';

function MessageInput() {
  return (
    <div className="p-4">
      <form className="flex w-full">
        <input
          className="rounded-xl px-4 text-sm flex-auto"
          type="text"
          placeholder="Message..."
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
