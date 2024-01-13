import Image from "next/image";
import { ResumeData } from "../constants/data";
export default function Experties() {
  return (
    <section className="relative w-full">
      <div className="styleSection">
        <div className="flex flex-col relative">
          <div className="flex items-center sideLine ">
            <Image
              className="align-baseline max-[600px]:w-[30px]"
              src={"/codehistory.svg"}
              width={40}
              height={40}
              alt="icon terminal"
            />
            <h3 className="headingStyle align-baseline pl-[1rem]">Resume</h3>
          </div>

          <div className="pl-[3.7rem] max-[600px]:pl-[3.1rem]">
            {/* start content */}
            <div className="pt-[2rem] grid grid-cols-2 gap-3 max-[600px]:grid-cols-1 max-w-full">
              {ResumeData.map((history) => (
                <div
                  key={history.id}
                  className="boxWrapper group p-px rounded-[20px]"
                >
                  <div className="flex items-center boxFill px-8 py-4 bg-[#1B1B1B] rounded-[20px] max-w-full">
                    <Image
                      className="fill-white"
                      src={history.src}
                      width={22}
                      height={22}
                      alt="icon"
                    />
                    <div className="flex flex-col gap-2 pl-[1.5rem] w-full">
                      <span>{history.year}</span>
                      <h3 className="text-[1.3rem] font-bold leading-none">
                        {history.position}
                      </h3>
                      <p className="">{history.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* end content */}
          </div>
        </div>
      </div>
    </section>
  );
}
