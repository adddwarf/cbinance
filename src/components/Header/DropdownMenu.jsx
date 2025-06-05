// src/components/DropdownMenu.jsx
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import clsx from "clsx";
import useDropdown from "../../hooks/useDropdown";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function DropdownMenu({ label, items }) {
  const { open, handleMouseEnter, handleMouseLeave } = useDropdown();

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Menu>
        <MenuButton>
          <div className="text-white flex hover:text-yellow-400">
            {label}
            <RiArrowDropDownLine
              className={clsx("text-[24px] ", open && "rotate-180")}
            />
          </div>
          {/* </div> */}
        </MenuButton>

        <Transition
          show={open}
          enter="transition ease-out duration-50"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-50"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <MenuItems
            static
            className="absolute left-0 mt-2 w-80 bg-[#1E2329] text-white rounded-lg shadow-lg p-4 z-10"
          >
            <h3 className="text-sm text-gray-400 uppercase mb-2">
              {label} Options
            </h3>

            {items.map((item) => (
              <MenuItem key={item.name}>
                {({ active }) => (
                  <a
                    href={item.href}
                    className={clsx(
                      "flex items-start gap-3 p-3 rounded-lg transition",
                      active ? "" : ""
                    )}
                  >
                    <div className="text-yellow-400 text-xl">{item.icon}</div>
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </a>
                )}
              </MenuItem>
            ))}
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
}
