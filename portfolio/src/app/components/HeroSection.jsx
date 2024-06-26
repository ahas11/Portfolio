"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { saveAs } from "file-saver";

const saveFile = () => {
  saveAs(
    "/Resume/Resume.pdf",
    "Abdouallah's_Resume.pdf"
  )
}

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
          style = {{maxWidth:"100%"}}
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal justify-self-start font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">
              Hello, I'm {""}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Abdouallah",
                1000,
                "a Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            An enthusiastic developer!
          </p>
          <div>
            <Link href="#contact" passHref>
              <button
                className="px-11 py-3 w-full sm:w-fit rounded-full mr-4
              bg-gradient-to-br from-primary-600 via-secondary-500 to-primary-600 hover:bg-slate-200 text-white"
              >
                Hire Me
              </button>
            </Link>
            <button
            onClick={saveFile}
              className="px-1 py-1 w-full sm:w-fit rounded-full 
            bg-gradient-to-br from-primary-600 via-secondary-500 to-primary-600 hover:bg-slate-800 mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={250}
              height={250}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;