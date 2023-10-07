import React from "react";

export default function RightForm() {
  return (
    <form className="flex flex-col space-y-8">
      <input
        type="text"
        placeholder="Username"
        style={{ borderBottom: "1px solid #ccc" }}
        className="outline-none bg-transparent border-gray-400 w-full max-w-md py-2 pr-4"
      />

      <input
        type="text"
        placeholder="Email"
        style={{ borderBottom: "1px solid #ccc" }}
        className="outline-none bg-transparent border-gray-400 w-full max-w-md py-2 pr-4"
      />

      <input
        type="text"
        placeholder="Question"
        style={{ borderBottom: "1px solid #ccc" }}
        className="outline-none bg-transparent border-gray-400 w-full max-w-md py-2 pr-4"
      />
      <button className="btn btn-primary btn-block">Submit</button>
    </form>
  );
}
