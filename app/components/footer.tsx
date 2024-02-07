"use client";
import { useState } from "react";
import { IconList } from "../constants/Icons";
import Link from "next/link";
export default function Footer() {
  const [isToday, setIsToday] = useState(new Date());
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const thisUpdate = 3;
  const thisDate = isToday.getDate();
  const thisYear = isToday.getFullYear();
  const currentMonth = month[isToday.getMonth()];
  const recentMonth = month[isToday.getMonth() - 1];
  let thisFormatDate;
  if (thisDate < thisUpdate) {
    thisFormatDate = recentMonth;
  } else {
    thisFormatDate = currentMonth;
  }
  const thisFormat = thisFormatDate + " " + thisYear;
  return (
    <footer className="styleSection mx-auto flex flex-col items-center pb-[3rem]">
      <div className="flex items-center gap-3">
        {IconList.map((icon) => (
          <Link
            className="relative transition-shadow ease-linear hover:fill-lime-500 hover:drop-shadow-[0_35px_35px_rgba(255,255,255,1)]"
            key={icon.id}
            href={icon.url}
          >
            <div className="group w-[32px] h-[32px]">{icon.svg}</div>
          </Link>
        ))}
      </div>
      <div className="w-full flex items-center justify-between max-sm:flex-col-reverse pt-6 gap-2">
        <p className="text-sm">
          Developed by <strong>coihsan</strong>
        </p>
        <code className="text-sm">
          Last update : {thisUpdate} {thisFormat}
        </code>
      </div>
    </footer>
  );
}
