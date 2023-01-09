import { useState } from "react";
import { faker } from "@faker-js/faker";
import { useEffect } from "react";

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      avatar: faker.internet.avatar(),
      userName: faker.internet.userName(),
      companyName: faker.company.name(),
      id: i,
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3
          className="text-sm font-bold
        text-gray-400"
        >
          Suggestions for you
        </h3>
        <button className="text-gray-600 font-semibold">See all</button>
      </div>
      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center
        justify-between mt-3 group"
        >
          <img
            className="h-10 w-10 rounded-full object-contain border-2 p-[1.5px] border-red-500
            cursor-pointer group-hover:scale-110 transition-transform duration-200 ease-out"
            src={profile.avatar}
            alt=""
          />
          <div className="flex-1 ml-4 cursor-default">
            <h2 className="font-semibold text-sm">{profile.userName}</h2>
            <h3 className="text-xm text-gray-400 truncate">
              Works at {profile.companyName}
            </h3>
          </div>
          <button className="text-blue-400 text-xs font-bold">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
