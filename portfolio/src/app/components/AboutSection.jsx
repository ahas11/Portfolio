"use client";
import Image from "next/image";
import React, { startTransition } from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>JavaScript</li>
        <li>Next.js</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>Python</li>
        <li>C++</li>
        <li>Java</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Bachelor's of Computer Science</li>
        <li>Concordia University</li>
        <li>2020-2023</li>
      </ul>
    ),
  },
  {
    title: "Hobbies",
    id: "hobbies",
    content: (
      <ul className="list-disc pl-2">
        <li>Reading</li>
        <li>Tennis</li>
        <li>Travelling</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, setTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white" id="about">
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
          I'm a fresh graduate from Concordia University with 
          a bachelor's degree in Computer Science. Throughout 
          my academic journey and beyond, I have gained hands-on 
          experience with a wide range of tools through various projects. 
          I am passionate about full stack development and love 
          creating applications that solve real-world problems. 
          As a quick learner, I constantly seek opportunities to 
          expand my knowledge and skill set. I thrive in collaborative 
          environments and am excited to work with others to develop 
          innovative and impactful applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("hobbies")}
              active={tab === "hobbies"}
            >
              {" "}
              Hobbies{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
