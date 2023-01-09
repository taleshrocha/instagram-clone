import { useEffect, useState } from "react";
import Story from "./Story";
import { faker } from "@faker-js/faker";
import { useSession } from "next-auth/react";

function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      avatar: faker.internet.avatar(),
      userName: faker.internet.userName(),
      id: i,
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div
      className="flex space-x-2 p-6 bg-white
    mt-8 border-gray-200 border rounded-sm overflow-x-scroll
    scrollbar-thin scrollbar-thumb-black"
    >
      {session && (
        <Story img={session.user.image} userName={session.user.username} />
      )}
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          userName={profile.userName}
        />
      ))}
    </div>
  );
}

export default Stories;
