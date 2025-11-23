import { useState } from "react";

import { PostModalProps } from "@/interfaces";

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle("");
    setContent("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md w-96">
        <h2 className="text-lg font-bold mb-4">Create a Post</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Post title"
            className="border w-full p-2 mb-3 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            placeholder="Post content"
            className="border w-full p-2 mb-3 rounded"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1 rounded border"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-1 bg-blue-600 text-white rounded"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
