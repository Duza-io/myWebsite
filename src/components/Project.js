import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 dark:bg-black body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-15">
          <CodeIcon className="mx-auto inline-block w-10 mb-4 dark:text-white" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Recent Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            These are the things I recently built during my free time. This section is in maintenance for a bug fix source codes will be available soon.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
          {projects.map((project) => (
            <div className="items-center bg-gray-800 rounded-lg p-5" key={project.image}>
              <img className="rounded-tl-lg rounded-tr-lg h-52 w-full" src={project.image} alt="pics" />
              <div className="p-2">
                <h1 className="text-2xl font-bold dark:text-white">
                  {project.title}
                </h1>
                <h4 className="text-lg font-bold tracking-tight text-white opacity-70">
                  {project.subtitle}
                </h4>
                <div className="px-2 pb-4 font-normal tracking-tight text-gray-700 dark:text-gray-400 ">
                  {project.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}