import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { db } from "../firebase";

function Post({ id, userName, userImg, img, caption }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const sendComment = async (e) => {
    e.preventDefault();

    // Make spamers life dificult
    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      userName: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

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
      <img className="object-cover w-full" src={img} alt="" />

      {/** Buttons */}
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <HeartIcon className="post-button" />
            <ChatIcon className="post-button" />
            <PaperAirplaneIcon className="post-button" />
          </div>

          <BookmarkIcon className="post-button" />
        </div>
      )}

      {/** Caption */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{userName} </span>
        {caption}
      </p>

      {/** Comments */}

      {/** Input box */}
      {session && (
        <form className="flex items-center p-4" action="">
          <EmojiHappyIcon className="h-7" />
          <input
            className="border-none flex-1 focus:ring-0 outline-none"
            placeholder="Add a comment..."
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            onClick={sendComment}
            className="font-semibold text-blue-400"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
