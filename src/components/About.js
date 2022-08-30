import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa"

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Mark.
                        <br className="hidden lg:inline-block" /> I love programming
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                        laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                        Laborum, voluptas natus?
                    </p>
                    <div className="flex justify-center">
                        <button href="#contact" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-black dark:text-white focus:none focus:outline-none focus:outline-none dark:focus:outline-none">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-black rounded-md group-hover:bg-opacity-0">
                                Contact Me!
                            </span>
                        </button>
                        {/*  <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a> */}
                    </div>
                    <div className="flex justify-center mt-5 space-x-4 text-2xl">
                        <a href="https://www.facebook.com/andrewduza19/" target={"_blank"} rel="noreferrer" className="text-white bg-transparent hover:text-blue-600">
                            <FaFacebook />
                        </a>
                        <a href="https://www.instagram.com/mrkdz19/" target={"_blank"} rel="noreferrer" className="text-white bg-transparent hover:text-red-400">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded animate-bounce"
                        alt="hero"
                        src="./hero.svg"
                    />
                </div>
            </div>
        </section>
    );
}