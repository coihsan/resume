import { IconList } from "../constants/Icons";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
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
      <p>
        Developed by <strong>coihsan</strong>
      </p>
    </footer>
  );
}
