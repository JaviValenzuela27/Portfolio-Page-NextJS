"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

const AboutSection = () => {
  const [tab, setTab] = useState("Skills");
  const [startTransition, isPending] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div>
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
          <div className="flex flex-row mt-8">
            <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500">
              Skills
            </span>
            <span>Education</span>
            <span>Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
