"use client";
import CalltoAction from "../UI/CalltoAction";
import MotionDiv from "../constants/MotionDiv";
import CopyButton from "../UI/CopyButton";
import Footer from "../components/footer";
export default function Contact() {
  return (
    <section className="relative  before:-z-10 px-[2rem] py-[7rem]">
      <MotionDiv className="max-w-[667px] mx-auto flex flex-col items-center gap-8 max-[1068px]:pt-[7rem] lg:pt-[15rem] max-[600px]:pt-[3rem]">
        <h1 className="text-center text-[2.2rem] max-[600px]:text-[1.3rem] leading-tight font-bold">
          If my profile matches your qualifications, I am available to work
          right now!
        </h1>
        <div className="flex gap-3 max-[600px]:mx-auto">
          <CalltoAction />
          <CopyButton
            className={"pl-[25px] w-[100%]"}
            textButton="E-Mail"
            textCopy="co.ihsan@gmail.com"
          />
        </div>
        <Footer />
      </MotionDiv>
    </section>
  );
}
