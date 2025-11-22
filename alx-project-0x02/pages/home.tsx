import React from "react";
import { CardProps } from "@/interfaces";
import Card from "@/components/common/Card";

const data: CardProps[] = [
  {
    title: "the title",
    content: "some content",
  },
  { title: "the title2", content: "some content2" },
];

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        {data.map((item, index) => (
          <Card key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
};

export default Home;
