import React from "react";

export default function Button({ btnName }) {
  return (
    <button className="py-3 px-8 bg-blue-800 text-white rounded-lg">
      {btnName}
    </button>
  );
}
