"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Postgress</li>
        <li>Express</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>dsfsfs</li>
        <li>sfsfdsf</li>
        <li>sfsfsf</li>
        <li>fsdfsfs</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul>
        <li>bbbbbbbbbb</li>
        <li>cccccccc</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            magnam itaque eaque perferendis unde tempora vel aliquid architecto
            aperiam iste necessitatibus voluptas quisquam commodi, facere natus
            rem sequi quasi ex vero fugit animi! Ullam totam veritatis nostrum
            delectus fugiat sed dolorum corporis veniam odio, omnis aliquam.
            Minima tempore ullam quia veritatis. Velit eaque porro quam quisquam
            earum sunt itaque enim maxime aut fugit. Ut sed asperiores earum
            perspiciatis natus quo amet quod. Earum perspiciatis doloremque rem
            voluptatibus veritatis aliquid repellat quisquam enim iure, quos
            minus nobis voluptates qui incidunt esse!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
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
