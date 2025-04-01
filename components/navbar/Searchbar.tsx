"use client";
import { useEffect, useState } from "react";
import Overlay from "./Overlay";

const Search = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Pokemon", "Nintendo", "Playstation"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(70);
  const period = 5000;

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const ticker = setTimeout(() => {
      tick();
    }, delta);

    return () => clearTimeout(ticker);
  }, [text, delta]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(70);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(70);
    }
  };

  return (
    <>
      <div className="flex items-center border-[3px] border-b-7 border-black rounded-[12px] shadow-md px-3 py-0.5 text-xl">
        <input
          type="text"
          placeholder={text}
          onFocus={() => setIsExpanded(true)}
          className="outline-none placeholder-gray-400 bg-transparent w-full"
        />
        <div className="border-l border-black h-6 mx-3"></div>
        <button className="text-sm underline hover:text-gray-500">Search</button>
      </div>

      {isExpanded && <Overlay onClose={() => setIsExpanded(false)} />}
    </>
  );
};

export default Search;
