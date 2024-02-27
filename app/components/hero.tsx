"use client";
import Header from "./header";
import Image from "next/image";
import { position } from "../constants/data";
import CalltoAction from "../UI/CalltoAction";
import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Hero() {
  return (
    <section className="relative  w-full h-[100%]">
      <div className="absolute inset-0 -z-10 h-full w-full bg-zinc-950 bg-[radial-gradient(#151515_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <Header />
      <div className="styleSection max-[600px]:py-[4rem] py-[7rem] flex items-center justify-start max-[600px]:flex-col max-[600px]:justify-center max-[600px]:items-center">
        <motion.div
          className="rounded-[54px] relative overflow-hidden bg-white/5 p-1"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <Image
            className="rounded-[54px] max-[600px]:w-[200px]"
            src={"/ihsan.webp"}
            width={350}
            height={350}
            alt="avatar"
          />
        </motion.div>
        <div className="pl-[3rem] flex flex-col gap-3 max-[600px]:pl-[0rem] ">
          <div>
            <motion.h2
              className="text-7xl max-[600px]:text-6xl pb-[2rem] font-bold max-[600px]:text-center drop-shadow-[0_5px_35px_rgba(255,255,255,0.5)] transition-all ease-linear duration-300 hover:drop-shadow-[0_5px_35px_rgba(255,255,255,1)]"
              variants={item}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
            >
              ˗ˏˋ Ihsan ˎˊ
            </motion.h2>
          </div>
          <div className="flex items-center gap-3 max-[600px]:mx-auto">
            {position.map((index) => (
              <motion.div
                variants={item}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
                key={index.id}
                className="flex items-center gap-1 font-medium px-3 py-1 border rounded-full"
              >
                <Image src={index.svg} width={20} height={20} alt="icon" />
                <h3>{index.title}</h3>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="flex gap-3 items-center max-[600px]:mx-auto max-[390px]:flex-col"
            variants={item}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <p>Credentials :</p>
            <div className="flex gap-3 items-center">
              <div className="flex gap-3 items-center">
                <Image
                  src={"/skillshop.svg"}
                  width={40}
                  height={40}
                  alt="skillshop"
                />
                <motion.a
                  variants={item}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                  className="hover:underline font-bold"
                  target="_blank"
                  href="https://skillshop.exceedlms.com/profiles/038b28dd54cb4f11bd4668684c05e95f"
                >
                  Skillshop
                </motion.a>
              </div>
              {"/"}
              <div>
                <motion.a
                  variants={item}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
                  className="hover:underline font-bold"
                  target="_blank"
                  href="https://scl.io/49LUWUx"
                >
                  Accredible
                </motion.a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={item}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
            className="flex gap-3 max-[600px]:mx-auto pt-[1rem]"
          >
            <CalltoAction />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
