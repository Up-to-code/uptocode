"use client";
import Image from "next/image";
import React from "react";
export default function OurClientsLogos() {
  const imageSize = 100;
  const logos = [
    {
      src: "logo1.png",
      alt: "Logo 1",
      width: imageSize,
      height: imageSize,
    },
    {
      src: "logo2.png",
      alt: "Logo 2",
      width: imageSize,
      height: imageSize,
    },
    {
      src: "logo3.png",
      alt: "Logo 3",
      width: imageSize,
      height: imageSize,
     
    },
    {
      src: "logo4.png",
      alt: "Logo 4",
      width: imageSize,
      height: imageSize,
  
    },
  ];
  return (
    <div className="w-full  bg-base-100 my-14  py-10">
      <div className="flex justify-center gap-10">
        {/* Add logos here */}
        {logos.map((logo) => (
          <Logo key={logo.src} {...logo} />
        ))}
      </div>
    </div>
  );
}

interface LogoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}
function Logo({ src, alt, width, height }: LogoProps) {
  return (
    <div  className="flex justify-center items-center">
      <Image
        src={src}
        alt={alt}
        width={src === "logo1.png" ? 70 : width}
        height={height}
        className={'filter grayscale hover:grayscale-0'}
        loader={() => src}
        loading="lazy"
      />
    </div>
  );
}
