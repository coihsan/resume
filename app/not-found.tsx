import Image from "next/image";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <Image src={"/ruben.gif"} width={300} height={300} alt="ruben" />
      <h1 className="text-4xl font-bold">Oops!</h1>
      <h2 className="text-2xl my-[1rem]">Page Not Found</h2>
      <p>The page you are looking for could not be found.</p>
      <Link
        className="px-4 py-2 bg-white rounded-md my-[1rem] text-neutral-900 font-bold"
        href={"/"}
      >
        Back to Home
      </Link>
    </div>
  );
}
