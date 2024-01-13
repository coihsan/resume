"use client";
import Image from "next/image";
import Experties from "./components/experties";
import Header from "./components/header";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Contact from "./components/contact";
import Cookies from "./UI/Cookies";
import { motion } from "framer-motion";
import Script from "next/script";

export default function Home() {
  return (
    <main>
      <div className="heroSection">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-GFF36FH35B" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-GFF36FH35B');
        `}
        </Script>
        <Header />
        <Hero />
      </div>
      <Experties />
      <div className="separator"></div>
      <Projects />
      <motion.div
        className="overflow-y-hidden relative contactSection max-[600px]:bg-top bg-fixed max-[780px]:before:translate-y-[5%] w-full h-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.div>
      <Cookies />
    </main>
  );
}
