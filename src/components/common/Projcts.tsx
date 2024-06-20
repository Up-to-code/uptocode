import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Projcts() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      url: "/project1",
    },
    {
      id: 2,
      title: "Project 2",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=100",
      url: "/project2",
    },
    {
      id: 3,
      title: "Project 3",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      url: "/project3",
    },
    {
      id: 4,
      title: "Project 4",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      url: "/project4",
    },
  ];
  return (
    <div>
      <h1 className="text-3xl  font-bold text-center">Our Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10 ">
        {projects.map((project) => (
          <Projct key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
interface ProjctCardProps {
  title: string;
  image: string;
  url: string;
}

const Projct = ({ title, image, url }: ProjctCardProps) => {
  return (
      <div className=" bg-base-100 shadow-md border  my-10 ">
        <div className="card-body">
          <Image src={image} alt={title} width={200} height={200} />
          <h2 className="card-title mt-4">{title}</h2>

          <div className="card-actions justify-end pt-4">
            <Link href={url}>
              <button className="underline">Show</button>
            </Link>
          </div>
        </div>
      </div>
  );
};
