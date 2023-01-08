import Post from "./Post";

const posts = [
  {
    id: "123",
    userName: "taleshrocha",
    userImg: "https://github.com/taleshrocha.png",
    img: "https://github.com/taleshrocha.png",
    caption: "Hello. My first post",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          userName={post.userName}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
