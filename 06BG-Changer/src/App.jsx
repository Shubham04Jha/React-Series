import { useState } from "react";
function App() {
  const [color, setColor] = useState("white");
  const colors = [
    "Red",
    "Green",
    "Blue",
    "Olive",
    "Grey",
    "Yellow",
    "Pink",
    "Purple",
    "White",
    "Black",
  ];
  const txtColors = {
    Pink: "text-black",
    Yellow: "text-black",
    White: "text-black",
  };

  return (
    <div
      className="w-full h-screen duration-200  "
      style={{ backgroundColor: color }}
    >
      {/* style = {{backgroundColor = {color}}} use : instead of = and no other curly brace as we have two going already*/}
      <div
        className="fixed flex flex-wrap flex-col justify-center right-12 inset-y-5 rounded-2xl p-2 gap-3 hover:drop-shadow-md "
        style={{ backgroundColor: "rgb(	241, 241, 241)" }}
      >
        {colors.map((c) => {
          const tcolor = txtColors[c] || "text-white";
          return (
            <div
              className="flex flex-wrap justify-center text-white rounded-xl p-1 hover:shadow-xl"
              style={{ backgroundColor: c }}
            >
              <button
                className={"px-4 text-lg font-semibold outline-none " + tcolor}
                onClick={() => setColor(c)}
              >
                {c}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
