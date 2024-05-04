import { Icons } from "@/app/constants/Icons";
interface Props {
  url: string;
  className: string;
  icon: JSX.Element;
  text: string;
}
export default function ButtonLink({ className, url, icon, text }: Props) {
  return (
    <div>
      <a
        className={`${className} flex items-center gap-1 px-5 py-3 w-max rounded-full transition-all duration-300 ease-linear shadow-lg`}
        href={url}
      >
        <span>{icon}</span>
        <span className="font-[600]">{text}</span>
      </a>
    </div>
  );
}
