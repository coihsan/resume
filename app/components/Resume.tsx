import Image from "next/image";
import { ResumeData } from "../constants/data";
export default function Experties() {
  return (
    <section className="relative w-full pt-12 ">
      <div className="styleSection">
        <div className="flex flex-col relative">
          <div className="flex items-center sideLine pb-[1rem]">
            <Image
              className="align-baseline max-[600px]:w-[30px]"
              src={"/codehistory.svg"}
              width={40}
              height={40}
              alt="icon terminal"
            />
            <h3 className="headingStyle align-baseline pl-[1rem]">Resume</h3>
          </div>

          <div className="pl-[3.7rem] max-[600px]:pl-[2rem]">
            {/* start content */}
            <div className="boxWrapper p-px rounded-[20px]">
              <div className="rounded-[20px] max-sm:p-5 p-8 bg-zinc-900 grid grid-cols-2 gap-3 max-[600px]:grid-cols-1 max-w-full ">
                {ResumeData.map((history) => (
                  <div
                    key={history.id}
                    className="  max-w-full group p-px max-sm:border-b-[1px] max-sm:border-zinc-600 last-of-type:border-0 max-sm:pb-3"
                  >
                    <div className="flex items-center">
                      <Image
                        className="fill-zinc-700"
                        src={history.src}
                        width={22}
                        height={22}
                        alt="icon"
                      />
                      <div className="flex flex-col gap-1 pl-[1.5rem] w-full">
                        <span className="">{history.year}</span>
                        <h3 className="text-[1.2rem] max-sm:text-[1rem] font-bold leading-none">
                          {history.position}
                        </h3>
                        <p className="text-zinc-400">{history.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* end content */}
          </div>
        </div>
      </div>
    </section>
  );
}
