// import React from "react";

// const months = {
//   January: "Jan",
//   February: "Feb",
//   March: "Mar",
//   April: "Apr",
//   May: "May",
//   June: "Jun",
//   July: "Jul",
//   August: "Aug",
//   September: "Sep",
//   October: "Oct",
//   November: "Nov",
//   December: "Dec",
// };
// const now = new Date();
// const weekDays = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// export default function Calendar() {
//   const year = 2024;
//   const month = "August";
//   const monthNow = new Date(year, Object.keys(months).indexOf(month), 1);
//   const firstDayofMonth = monthNow.getDay();
//   const daysInMonth = new Date(year, Object.keys(month).indexOf(month) + 1, 0);
//   const daysToDisplay = firstDayofMonth + daysInMonth;
//   const numRows = Math.floor(daysToDisplay / 7) + (daysToDisplay % 7 ? 1 : 0);
//   return <div>

//   </div>;
// }

import React from "react";
import { Fugaz_One } from "next/font/google";
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

// Array of week days
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Object mapping full month names to short names
const months = {
  January: "Jan",
  February: "Feb",
  March: "Mar",
  April: "Apr",
  May: "May",
  June: "Jun",
  July: "Jul",
  August: "Aug",
  September: "Sep",
  October: "Oct",
  November: "Nov",
  December: "Dec",
};

// Array of violet shades
const violetShades = [
  "bg-violet-50",
  "bg-violet-100",
  "bg-violet-200",
  "bg-violet-300",
  "bg-violet-400",
  "bg-violet-500",
  "bg-violet-600",
  "bg-violet-700",
];

export default function Calendar() {
  const currentDate = new Date();
  const today = currentDate.getDate();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  // Get the name of the current month
  const monthName = Object.keys(months)[month];

  // Create an array to represent the days in the month
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="calendar">
      <h2
        className={
          "text-center text-2xl font-bold mb-4 textGradient mx-2 " +
          fugaz.className
        }
      >
        {monthName} {year}
      </h2>
      <div className="grid grid-cols-7 gap-2 text-center">
        {weekDays.map((day, index) => (
          <div key={index} className={"font-bold " + fugaz.className}>
            {day}
          </div>
        ))}
        {/* Render empty boxes for the days before the first day of the month */}
        {Array(firstDayOfMonth)
          .fill(null)
          .map((_, index) => (
            <div key={index}></div>
          ))}
        {/* Render the actual days of the month with dynamic violet shades */}
        {daysArray.map((day, index) => (
          <div
            key={index}
            className={`p-2 rounded-md ${
              day < today
                ? "bg-white"
                : violetShades[(index - firstDayOfMonth) % violetShades.length]
            } hover:bg-gray hover:shadow-xl cursor-pointer`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}
