import React from "react";
import { Fugaz_One } from "next/font/google";
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Dashboard() {
  const statuses = {
    num_days: 14,
    time_remaining: "13:14:26",
    date: new Date().toDateString(),
  };

  const moodz = {
    Crying: "😭",
    Sad: "😢",
    Existing: "😶",
    Good: "😊",
    Elated: "😍",
    Dizzy: "😴",
  };

  return (
    <div className="flex flex-col flex-1 gap-6 ms:gap-8 md:gap-12 p-4 sm:p-6 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-indigo-50 text-indigo-500 rounded-lg gap-4 sm:gap-6 p-4 sm:p-6">
        {Object.keys(statuses).map((status, statusIndex) => {
          return (
            <div key={statusIndex} className="p-4 flex flex-col gap-4 sm:gap-6">
              <p className="font-medium uppercase text-xs sm:text-sm">
                {status.replaceAll("_", " ")}
              </p>
              <p
                className={"text-lg sm:text-xl md:text-2xl " + fugaz.className}
              >
                {statuses[status]}
              </p>
            </div>
          );
        })}
      </div>
      <h4
        className={
          "text-2xl sm:text-3xl md:text-4xl text-center " + fugaz.className
        }
      >
        How do you <span className="textGradient">feel</span> today?{" "}
      </h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-4 md:gap-6">
        {Object.keys(moodz).map((mood, moodIndex) => {
          return (
            <button
              className="p-3 sm:p-4 rounded-lg purpleShadow duration-200 bg-indigo-50 hover:bg-indigo-100 flex flex-col items-center transition-transform transform hover:scale-105"
              key={moodIndex}
            >
              <p className="text-5xl sm:text-6xl md:text-7xl transform transition-transform duration-200 hover:scale-110">
                {moodz[mood]}
              </p>
              <p
                className={
                  "mt-2 text-base sm:text-lg md:text-xl textGradient " +
                  fugaz.className
                }
              >
                {mood}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
