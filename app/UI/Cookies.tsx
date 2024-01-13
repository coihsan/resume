"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const Cookies = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const isBannerClosed = localStorage.getItem("cookieBannerClosed");
    if (isBannerClosed) {
      setIsClosed(true);
    }
  }, []);

  const handleClose = () => {
    setIsClosed(true);
    localStorage.setItem("cookieBannerClosed", "true");
  };

  if (isClosed) {
    return null;
  }

  return (
    <motion.div
      className="z-50 mx-auto fixed bottom-5 right-5 max-[600px]:left-0 max-[600px]:right-0 max-[600px]:bottom-3 flex justify-center  w-[30%] max-[600px]:w-[90%] backdrop-blur-lg text-neutral-50 border border-neutral-500 rounded-lg"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 3, ease: [0.17, 0.67, 0.83, 0.67] }}
    >
      <div className="grid items-center justify-between gap-5 max-[600px]:flex-col p-5 mx-auto">
        <div className="flex items-center gap-2">
          <p className="max-[600px]:text-[14px] max-[600px]:text-center flex max-[600px]:flex-col ">
            🍪 This site uses cookies to understand your experience and analyze
            our traffic.
          </p>
        </div>
        <button
          className="px-2 py-1 rounded-md bg-neutral-200 hover:bg-neutral-400 max-[600px]:text-[14px] text-neutral-950 font-medium"
          onClick={handleClose}
        >
          Okay!
        </button>
      </div>
    </motion.div>
  );
};

export default Cookies;
