import { motion } from "framer-motion";
export default function Header() {
  return (
    <header className="flex items-center justify-end max-[600px]:justify-start max-w-screen-lg px-[2rem] pt-[2rem] w-full mx-auto ">
      <motion.div
        className="bg-zinc-800 rounded-full w-max flex items-center gap-3 px-4 py-2"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="relative flex items-center justify-center h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </div>
        <h4 className="font-medium text-[14px] max-[600px]:text-[12px]">
          Available for Full-Time
        </h4>
      </motion.div>
    </header>
  );
}
