const User = ({ user }) => {
  return (
    <div className="px-2 py-0.5">
      <button
        type="button"
        className="flex w-full items-center gap-x-2 rounded-lg py-2 pr-2 pl-2.5 text-sm transition-colors hover:bg-gray-100 focus:bg-gray-50 focus:outline-none active:bg-gray-50"
      >
        <div className="shrink-0">
          <img
            src={user.image}
            alt={user.name}
            loading="lazy"
            className="size-6 rounded-full border-[0.5px] border-black/10 bg-white"
          />
        </div>

        <div className="shrink-0">
          <p className="font-medium">{user.name}</p>
        </div>

        <div className="truncate">
          <span className="text-gray-600">@{user.username}</span>
        </div>
      </button>
    </div>
  );
};

export default User;
