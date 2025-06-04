import {
  ArrowBendDownLeftIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowUpIcon,
  GearIcon,
  MagnifyingGlassIcon,
  XIcon,
} from "@phosphor-icons/react";
import User from "@/components/user";
import { useEffect, useState } from "react";
import { createUser } from "@/utils/helper";

const controls = [
  {
    icons: [ArrowUpIcon, ArrowDownIcon],
    action: "to navigate",
  },
  {
    icons: [ArrowBendDownLeftIcon],
    action: "to select",
  },
  {
    icons: [XIcon],
    action: "to close",
  },
  {
    icons: [ArrowLeftIcon],
    action: "return to parent",
  },
];

const CommandMenu = () => {
  const [search, setSearch] = useState("");

  const [recent, setRecent] = useState([]);

  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    setRecent(Array(2).fill(null).map(createUser));

    setAllUsers(Array(16).fill(null).map(createUser));
  }, []);

  const users = allUsers.filter((user) =>
    user.name.toLowerCase().includes(search.trim().toLowerCase()),
  );

  return (
    <div className="relative mx-auto flex h-[30rem] max-w-[40rem] flex-col overflow-hidden rounded-xl bg-white shadow-xl">
      <div className="border-b border-gray-200">
        <div className="p-4">
          <div className="flex items-center gap-x-2">
            <label htmlFor="search">
              <MagnifyingGlassIcon
                size={20}
                weight="bold"
                className="text-gray-400"
              />
            </label>

            <input
              id="search"
              name="search"
              type="text"
              placeholder="Search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="h-6 flex-1 placeholder-gray-500 focus:outline-none"
            />

            <div className="shrink-0">
              <div className="flex size-6 items-center justify-center rounded-sm border border-gray-200 bg-gray-50 text-sm font-medium text-gray-600">
                ⌘
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-auto">
        <div className="divide-y divide-gray-200">
          <div className="shrink-0">
            <div className="py-2">
              <div className="px-4 pt-2 pb-0.5">
                <h6 className="text-sm font-medium text-gray-600">Recent</h6>
              </div>

              <ul role="list">
                {recent.map((user) => (
                  <li key={user.id}>
                    <User user={user} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="py-2">
            <div className="px-4 pt-2 pb-0.5">
              <h6 className="text-sm font-medium text-gray-600">All users</h6>
            </div>

            <div className="overflow-auto">
              <ul role="list">
                {users.map((user) => (
                  <li key={user.id}>
                    <User user={user} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto hidden md:block">
        <div className="border-t border-black/10">
          <div className="bg-white/80 backdrop-blur-lg">
            <div className="py-2 pr-2 pl-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-x-4">
                  {controls.map((control, index) => (
                    <div key={index} className="flex items-center gap-x-2">
                      <div className="flex gap-x-1.5">
                        {control.icons.map((Icon, index) => (
                          <div
                            key={index}
                            className="flex size-7 items-center justify-center rounded-lg border border-gray-200 bg-white"
                          >
                            <Icon
                              size={16}
                              weight="bold"
                              className="text-gray-400"
                            />
                          </div>
                        ))}
                      </div>

                      <p className="text-sm font-semibold text-gray-500">
                        {control.action}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="flex size-9 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 active:bg-gray-50"
                >
                  <GearIcon size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandMenu;
