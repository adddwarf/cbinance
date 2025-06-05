import React, { useState, useEffect } from "react";

export default function NewDashboard() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            "X-API-KEY": "jsg4c7HZ2uSdl+cuJ7jFGIVUyVt4+vafXDCS0n0jdew=", // Подставь свой!
          },
        };

        const response = await fetch(
          "https://openapiv1.coinstats.app/news",
          options
        );
        const data = await response.json();

        console.log("Ответ от API:", data);

        // Берем только первые 3 новости
        setNews(data.result.slice(0, 4));
      } catch (error) {
        console.error("Ошибка при загрузке новостей:", error);
      }
    }

    fetchNews();
  }, []);
  return (
    <div className="rounded-2xl bg-[#1E2329] text-white mt-2 px-6 py-3">
      <div className="flex justify-between items-center">
        <h2 className="text-base font-bold">News</h2>
        <a
          href="#"
          className="flex items-center text-[#848e9c] hover:text-gray-300 text-sm"
        >
          View All News
          <svg
            className="mt-2 h-[16px] w-[16px]"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </div>

      <ul className="mt-4 space-y-4 text-md flex flex-wrap">
        {news.map((item) => (
          <li key={item.id}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#848e9c]"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
