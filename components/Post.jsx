import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

function Post({ id, userName, userImg, img, caption }) {
  return (
    <div
      className="bg-white my-7 border
    rounded-sm"
    >
      {/** Header */}
      <div className="flex items-center p-5">
        <img
          className="h-12 w-12 rounded-full object-contain border p-1 mr-3"
          src={userImg}
          alt=""
        />
        <p className="flex-1 font-bold">{userName}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/** Image */}
      <img src={img} alt="" />

      {/** Buttons */}

      {/** Caption */}

      {/** Comments */}

      {/** Input box */}
    </div>
  );
}

export default Post;
