import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import avatar from "../public/avatar.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import web9 from "../public/web9.png";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Nathaniel Cowan</title>
        <meta name="description" content="Nathaniel Cowan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/CM.png" />
      </Head>

      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
      <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">
              thisIsNC
            </h1>
            <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=" cursor-pointer text-2xl" />
                </li>
                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                    href="https://github.com/nathanielgcowan" >
                    Github
                  </a>
                </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Nathaniel Cowan
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Web Dev
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Let's program!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a className="twitter" href="https://twitter.com/nathaniel_cm" >
                <AiFillTwitterCircle />
              </a>
              <a className="linkedin" href="https://www.linkedin.com/in/nathanielgcowan/" >
                <AiFillLinkedin />
              </a>
              <a className="youtube" href="https://www.youtube.com/channel/UCEEOkVIuRZIhV_nlA6XIe5Q" >
                <AiFillYoutube />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={avatar} alt="avatar" layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <center>
              <h3 className="text-3xl py-1 dark:text-white ">
                Services
              </h3>
            </center>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <center><h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3></center>
            <center><p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I have worked on several projects. Check them out here!</p></center>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                alt="object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web9}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                alt="object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web9}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                alt="cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web9}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                alt="cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web9}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                alt="cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web9}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                alt="cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web9}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
