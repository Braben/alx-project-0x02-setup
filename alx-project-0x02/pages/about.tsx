import React from "react";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";
const about = () => {
  return (
    <div>
      <Header />
      <h1>About Page</h1>
      <Button
        label="Small Button"
        className=""
        shapes="rounded-sm"
        sizes="small"
        onClick={() => alert("Button Clicked!")}
      />
      <Button
        label="Medium Button"
        className=""
        shapes="rounded-md"
        sizes="medium"
        onClick={() => alert("Button Clicked!")}
      />
      <Button
        label="Large Button"
        className=""
        shapes="rounded-full"
        sizes="large"
        onClick={() => alert("Button Clicked!")}
      />
    </div>
  );
};

export default about;
