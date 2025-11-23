import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";
import React from "react";

interface PostPageProps {
  posts: PostProps[];
}

const posts = ({ posts }: PostPageProps) => {
  return (
    <div className="min-h-screen bg-gray-100 container mx-auto p-4">
      <Header />
      <h1>Posts</h1>
      <div>
        <div className="text-lg font-medium mb-4 ">All Posts</div>
        <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default posts;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostProps[] = await res.json();

  return {
    props: { posts },
  };
}
