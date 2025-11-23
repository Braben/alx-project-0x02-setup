import React from "react";
import { CardProps } from "@/interfaces";
import Card from "@/components/common/Card";
import { useState } from "react";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  const handleAddPost = (data: { title: string; content: string }) => {
    setPosts((prev) => [data, ...prev]);
  };
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <h1>Home</h1>

      <div className="p-6">
        <button
          className="px-4 py-2 bg-blue-700 text-white rounded"
          onClick={() => setIsModalOpen(true)}
        >
          + Create Post
        </button>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />

        <h1 className="text-xl font-bold mt-6 mb-3">Posts</h1>

        <div className="">
          {posts.map((post, index) => (
            /* <h2 className="font-semibold">{post.title}</h2>
              <p>{post.content}</p> */
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
