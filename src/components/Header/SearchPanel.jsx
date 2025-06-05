import { Popover, Transition } from "@headlessui/react";
import { Fragment, useRef, useEffect, useState } from "react";
import { fetchHotItems, fetchEarnItems } from "../../hooks/api";

export default function SearchPanel() {
  const inputRef = useRef(null);
  const [search, setSearch] = useState("");
  const [hotItems, setHotItems] = useState([]);
  const [earnItems, setEarnItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(earnItems.length / itemsPerPage);

  const loadData = async () => {
    const hot = await fetchHotItems();
    const earn = await fetchEarnItems();
    setHotItems(hot);
    setEarnItems(earn);
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const clearInput = () => {
    setSearch("");
    inputRef.current?.focus();
  };

  const handleScroll = (direction) => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    if (direction === "left" && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
    if (
      direction === "right" &&
      currentPage < Math.ceil(earnItems.length / 3) - 1
    ) {
      setCurrentPage(currentPage + 1);
    }

    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <Popover className="relative flex">
      {({ open }) => (
        <>
          <Popover.Button
            className={`text-white ${
              open ? "text-yellow-400" : "hover:text-yellow-400"
            } focus:outline-none hidden sm:block`}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 6C13.7614 6 16 8.23858 16 11C16 13.7614 13.7614 16 11 16C8.23857 16 6 13.7614 6 11C6 8.23858 8.23858 6 11 6ZM11 3C15.4183 3 19 6.58172 19 11C19 12.3907 18.6451 13.6985 18.021 14.8379L21.0915 17.9086L19.5006 19.4995L17.9097 21.0904L14.8396 18.0201C13.6999 18.6448 12.3914 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3Z"
              />
            </svg>
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 scale-90 -translate-y-4"
            enterTo="opacity-100 scale-100 translate-y-0"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100 scale-100 translate-y-0"
            leaveTo="opacity-0 scale-90 -translate-y-4"
            afterEnter={() => inputRef.current?.focus()}
          >
            <Popover.Panel
              className="absolute z-10 mt-10 w-[363px] right-0 bg-[#1E2329] shadow-lg rounded-lg text-white border border-gray-700"
              static
            >
              <div className="relative flex w-full mb-2 items-center px-4 py-4 gap-2">
                <span className="absolute inset-y-0 start-3 flex items-center ps-3 pointer-events-none top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11 6C13.7614 6 16 8.23858 16 11C16 13.7614 13.7614 16 11 16C8.23857 16 6 13.7614 6 11C6 8.23858 8.23858 6 11 6ZM11 3C15.4183 3 19 6.58172 19 11C19 12.3907 18.6451 13.6985 18.021 14.8379L21.0915 17.9086L19.5006 19.4995L17.9097 21.0904L14.8396 18.0201C13.6999 18.6448 12.3914 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3Z"
                    />
                  </svg>
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="SOL"
                  className="w-full shrink-4 pl-9 py-2 text-sm font-semibold rounded-lg border focus:border-yellow-400 border-gray-600 focus:outline-none bg-[#1E2329]"
                />
                {search && (
                  <a
                    onClick={clearInput}
                    className="absolute end-14 flex items-center pe-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer"
                  >
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-7.233 0l3.006 3.005-1.768 1.768L12 13.767l-3.005 3.005-1.768-1.768 3.005-3.005-3.005-3.005 1.768-1.767L12 10.23l3.005-3.005 1.768 1.767L13.767 12z"
                      />
                    </svg>
                  </a>
                )}
                <button
                  onClick={clearInput}
                  className="text-yellow-400 text-sm font-medium hover:text-yellow-300 transition-colors"
                >
                  Cancel
                </button>
              </div>

              <div className="relative">
                <h3 className="text-sm text-gray-300 mb-2 px-4">Hot Trading</h3>
                <div className="space-y-1">
                  {hotItems.map((item, i) => (
                    <a
                      href="#"
                      key={i}
                      className="flex items-center px-4 py-4 justify-between hover:bg-[#2B3139] transition-colors duration-200"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-400">{i + 1}</span>
                        <img
                          className="w-6 h-6"
                          src={item.logo}
                          alt={item.label}
                        />
                        <div className="flex items-baseline">
                          <span className="text-white">
                            {item.label.split("/")[0]}
                          </span>
                          <span className="text-gray-400 text-xs">
                            /{item.label.split("/")[1]}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-medium text-sm">
                          ${item.price}
                        </div>
                        <div
                          className={`text-xs font-semibold ${
                            item.change >= 0 ? "text-green-500" : "text-red-500"
                          }`}
                        >
                          {item.change >= 0 ? "+" : ""}
                          {item.change}%
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-4 px-4 pb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-semibold text-gray-300">Earn</h3>
                  <div className="flex space-x-1 ">
                    <span
                      onClick={() => handleScroll("left")}
                      disabled={currentPage === 0 || isTransitioning}
                      className="text-gray-400 flex items-center w-4 h-4 rounded-md py-2 hover:bg-gray-600"
                    >
                      <svg
                        size="20"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.934 12l3.89 3.89-1.769 1.767L8.398 12l1.768-1.768 3.89-3.889 1.767 1.768-3.889 3.89z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span
                      onClick={() => handleScroll("right")}
                      disabled={
                        currentPage >= totalPages - 1 || isTransitioning
                      }
                      className="text-gray-400 flex items-center w-4 h-4 rounded-md py-2 hover:bg-gray-600 w-4 h-4"
                    >
                      <svg
                        size="20"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="overflow-hidden w-full">
                  {" "}
                  {/* фиксированная ширина панели */}
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${currentPage * 100}%)`,
                      width: `${totalPages * 100}%`,
                    }}
                  >
                    {Array.from({ length: totalPages }).map((_, pageIndex) => (
                      <div
                        href="#"
                        key={pageIndex}
                        className="w-full flex gap-2 items-center flex-shrink-0 flex"
                      >
                        {earnItems
                          .slice(
                            pageIndex * itemsPerPage,
                            pageIndex * itemsPerPage + itemsPerPage
                          )
                          .map((item, i) => (
                            <div
                              key={i}
                              className="w-[104px] py-2 px-3 bg-[#1E2329] rounded-lg border border-[#2B3139] transition-colors duration-200"
                            >
                              <div className="flex flex-col">
                                <div className="mb-2">
                                  <img
                                    src={item.logo}
                                    alt={item.asset}
                                    className="w-8 h-8"
                                  />
                                  <div className="text-sm font-semibold text-white">
                                    {item.asset}
                                  </div>
                                </div>
                                <div className="text-xs text-gray-400">
                                  MAXAPR
                                </div>
                                <div className="text-green-500 font-bold">
                                  {item.apr}%
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
