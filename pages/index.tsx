import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { use, useState } from "react";

const Home: NextPage = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
console.log(input.split(" ").reverse().join(" "),'reverse');

  function Reverse() {
    let tempString = input;

    setOutput(tempString.split(" ").reverse().join(" "));
  }

  function Clear(){
     setInput("")
     setOutput("")
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="">
        <input
          type="text"
          placeholder="Type Something"
          className="px-10 py-2 w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="flex justify-center">
          <button
            onClick={Reverse}
            className="rounded-lg bg-green-500 px-6 py-2 m-6"
          >
            Reverse
          </button>
          <button
            onClick={Clear}
            className="rounded-lg bg-red-500 px-6 py-2 m-6"
          >
            Clear
          </button>
        </div>
      </div>
      <div>{output}</div>
    </div>
  );
};

export default Home;
