"use client";
import React, { useState } from "react";

interface CopyButtonProps {
  textButton: string;
  textCopy: string;
  className?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({
  textButton,
  textCopy,
  className,
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(textCopy).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    });
  };

  return (
    <button
      className="flex w-max shadow-md gap-3 items-center justify-center px-4 py-2 rounded-full  bg-transparent border border-[#4C4C4C] hover:border-white hover:bg-neutral-50/10 focus:outline-none transition-all drop-shadow-[0_35px_35px_rgba(255,255,255,100)] ease-linear hover:drop-shadow-[0_35px_35px_rgba(255,255,255,1)]"
      onClick={handleCopyClick}
      style={{ color: isCopied ? "#a1a1aa" : "#171717" }}
    >
      <svg
        className="fill-white"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path>
      </svg>
      <span className="text-white font-[600] ">
        {isCopied ? "Copied!" : textButton}
      </span>
    </button>
  );
};

export default CopyButton;
