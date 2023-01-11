import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import {
  HeartIcon as HeartIconFilled,
  UsersIcon,
} from "@heroicons/react/solid";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Moment from "react-moment";

function Post({ id, userName, userImg, img, caption }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db, id]
  );

  // Populate the likes
  useEffect(
    () =>
      onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  );

  // Get if the user has liked the post every time the 'likes' changes
  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id === session?.user?.id) !== -1
      ),
    [likes]
  );

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.id));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.id), {
        userName: session.user.username,
      });
    }
  };

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
            {hasLiked ? (
              <HeartIconFilled
                onClick={likePost}
                className="post-button text-red-500"
              />
            ) : (
              <HeartIcon onClick={likePost} className="post-button" />
            )}

            <ChatIcon className="post-button" />
            <PaperAirplaneIcon className="post-button" />
          </div>

          <BookmarkIcon className="post-button" />
        </div>
      )}

      {/** Caption */}
      <p className="p-5 truncate">
        {likes.length > 0 && (
          <p className="font-bold mb-1">
            {likes.length} like{likes.length === 1 ? "" : "1"}
          </p>
        )}
        <span className="font-bold mr-1">{userName} </span>
        {caption}
      </p>

      {/** Comments */}
      {comments.length > 0 && (
        <div
          className="ml-10 h-20 overflow-y-scroll
        scrollbar-thumb-black scrollbar-thin"
        >
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-center space-x-2 mb-3">
              <img
                className="h-7 rounded-full"
                src={comment.data().userImage}
                alt=""
              />
              <p className="text-sm flex-1">
                <span className="font-bold">{comment.data().userName}</span>{" "}
                {comment.data().comment}
              </p>
              <Moment fromNow className="pr-5 text-xm">
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}

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
