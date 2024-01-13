import { IconList } from "../constants/Icons";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  const today = new Date();
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
  const thisYear = today.getFullYear();
  const thisMonth = month[today.getMonth()];
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
      <div className="w-full flex items-center justify-between max-sm:flex-col-reverse pt-6">
        <p className="text-sm">
          Developed by <strong>coihsan</strong>
        </p>
        <code className="text-sm">
          Last update : 14 {thisMonth} {thisYear}
        </code>
      </div>
    </footer>
  );
}
