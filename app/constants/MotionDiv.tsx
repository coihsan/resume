"use client";
import { motion } from "framer-motion";
interface MotionProps {
  className: string;
  key?: any;
}
export default function MotionDiv({ className, children, key }: any) {
  return (
    <motion.div
      className={className}
      key={key}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        type: "spring",
        bounce: 0.25,
        delay: 0.3,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
