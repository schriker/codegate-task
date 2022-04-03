function Message() {
  return (
    <>
      <div className="flex my-10">
        <img
          className="inline-block h-6 w-6 rounded-full mr-4"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <div>
          <div className="rounded-2xl shadow-2xl bg-[#fff] p-5 mb-2 text-zinc-600">
            <p className="text-sm font-bold">Krystian Pach</p>
            <p className="text-sm">Hello, how are you?</p>
          </div>
          <div className="flex text-sm text-zinc-400 space-x-1 pl-5">
            <span>6:35</span>
            <button className="border-l border-zinc-400 pl-1">edit</button>
            <button className="border-l border-zinc-400 pl-1">delete</button>
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse my-10">
        <img
          className="inline-block h-6 w-6 rounded-full ml-4"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          alt=""
        />
        <div>
          <div className="rounded-2xl shadow-2xl shadow-blue-500/50 bg-gradient-to-r from-cyan-500 to-blue-500 p-5 mb-2 text-[#fff]">
            <p className="text-sm font-bold">Krystian Pach</p>
            <p className="text-sm">
              Hello, how are you? Hello, how are you? Hello, how are you? Hello,
              how are you? Hello, how are you? Hello, how are you? Hello, how
              are you? Hello, how are you? Hello, how are you? Hello, how are
              you? Hello, how are you?
            </p>
          </div>
          <div className="flex text-sm text-zinc-400 space-x-1 pl-5">
            <span>6:35</span>
            <button className="border-l border-zinc-400 pl-1">edit</button>
            <button className="border-l border-zinc-400 pl-1">delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
