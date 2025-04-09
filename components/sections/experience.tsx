"use client";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export function ExperienceSection() {
  const timelineData = [
    {
      title: "MAR 2025 - PRESENT ",
      content: (
        <div>
          <h3 className="mb-1 flex flex-col text-2xl font-medium text-zinc-800 md:flex-row md:items-baseline md:gap-2 dark:text-zinc-200">
            Frontend Developer
            <span className="text-base font-light text-zinc-400 md:text-lg">
              Intern
            </span>
          </h3>
          <p className="text-secondary mb-3 text-lg">
            Carbon Crunch (Backed by IIML - EIC)
          </p>
          <ul className="space-y-3">
            <li className="inline-flex items-start gap-2">
              <div className="bg-secondary mt-2 h-2 w-2 flex-none" />
              Spearheaded the development of a highly responsive and
              user-friendly company dashboard using React.js, Next.js, and
              Tailwind CSS.
            </li>
            <li className="inline-flex items-start gap-2">
              <div className="bg-secondary mt-2 h-2 w-2 flex-none" />
              Optimized UI/UX by crafting intuitive interfaces and implementing
              seamless interactive features to elevate user engagement.
            </li>
            <li className="inline-flex items-start gap-2">
              <div className="bg-secondary mt-2 h-2 w-2 flex-none" />
              Collaborated cross-functionally with backend teams to integrate
              APIs, ensuring robust performance and a cohesive user experience.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "OCT 2024 - NOV 2024",
      content: (
        <div>
          <h3 className="mb-1 text-2xl font-medium text-zinc-800 dark:text-zinc-200">
            Open Source Develper
          </h3>
          <p className="text-secondary mb-3 text-lg">
            Girl Script Summer of Code 2024 Extended
          </p>
          <ul className="mb-3 space-y-3">
            <li className="inline-flex items-start gap-2">
              <div className="bg-secondary mt-2 h-2 w-2 flex-none" />
              Contributed to open source projects by developing clean,
              responsive, and accessible user interfaces using Vanilla
              JavaScript.
            </li>
            <li className="inline-flex items-start gap-2">
              <div className="bg-secondary mt-2 h-2 w-2 flex-none" />
              Enhanced user experience by optimizing UI components and ensuring
              cross-browser compatibility.
            </li>
            <li className="inline-flex items-start gap-2">
              <div className="bg-secondary mt-2 h-2 w-2 flex-none" />
              Collaborated with global contributors to fix bugs, implement new
              features, and maintain code quality across projects.
            </li>
          </ul>
          <div className="mt-2 grid hidden grid-cols-1 gap-4 md:grid-cols-2">
            <div className="h-40 w-full rounded-lg bg-zinc-200 object-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 dark:bg-zinc-800"></div>
            <div className="h-40 w-full rounded-lg bg-zinc-200 object-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 dark:bg-zinc-800"></div>
          </div>
        </div>
      ),
    },

    {
      title: "FEB 2024 - APR 2024",
      content: (
        <div>
          <h3 className="mb-1 text-2xl font-medium text-zinc-800 dark:text-zinc-200">
            Freelance Developer
          </h3>
          <p className="text-secondary mb-3 text-lg">Step to Success</p>
          <ul className="space-y-3">
            <li className="inline-flex items-start gap-2">
              <div className="bg-secondary mt-2 h-2 w-2 flex-none" />
              Delivered tailored websites and web applications for clients
              ensuring pixel-perfect, responsive designs.
            </li>
            <li className="inline-flex items-start gap-2">
              <div className="bg-secondary mt-2 h-2 w-2 flex-none" />
              Actively collaborated with clients to gather requirements, provide
              updates, and incorporate feedback for improved satisfaction.
            </li>
            <li className="inline-flex items-start gap-2">
              <div className="bg-secondary mt-2 h-2 w-2 flex-none" />
              Engaged in user-centric design practices, enhancing interactivity
              and usability based on real-time user input and behavior insights.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "JUL 2023 - SEP 2023",
      content: (
        <div>
          <h3 className="mb-1 text-2xl font-medium text-zinc-800 dark:text-zinc-200">
            Freelance Developer
          </h3>
          <p className="text-secondary mb-3 text-lg">AyasyaEco</p>
          <ul className="space-y-3">
            <li className="inline-flex items-start gap-2">
              <div className="bg-secondary mt-2 h-2 w-2 flex-none" />
              Delivered custom websites and web applications for clients as a
              frontend developer, focusing on functionality, aesthetics, and
              responsiveness.
            </li>
            <li className="inline-flex items-start gap-2">
              <div className="bg-secondary mt-2 h-2 w-2 flex-none" />
              Transformed client requirements into engaging, user-friendly
              interfaces that work seamlessly across devices.
            </li>
            <li className="inline-flex items-start gap-2">
              <div className="bg-secondary mt-2 h-2 w-2 flex-none" />
              Managed the entire frontend development process, ensuring timely
              delivery and high-performance user experiences.
            </li>
          </ul>
          <br />
        </div>
      ),
    },

    // {
    //   title: (
    //     <span>
    //       <span className="text-secondary">C</span>ertificates{" "}
    //       <span className="text-secondary">O</span>nline{" "}
    //       <span className="text-secondary">C</span>ourses
    //     </span>
    //   ),
    //   content: (
    //     <div className="flex flex-col gap-3">
    //       <div>
    //         <h3 className="mb-1 flex flex-col text-2xl font-medium text-zinc-800 md:flex-row md:items-baseline md:gap-2 dark:text-zinc-200">
    //           Data Structures and Algorithms
    //           <span className="text-base font-light text-zinc-400 md:text-lg">
    //             APRIL 2023 - JUL 2023
    //           </span>
    //         </h3>
    //         <p className="text-secondary mb-3 text-lg">
    //           Bootcamp Frontend Developer By Binar Academy
    //         </p>
    //         <ul className="space-y-3">
    //           <li className="inline-flex items-start gap-2">
    //             <div className="bg-secondary mt-2 h-2 w-2 flex-none" />
    //             Focused on developing a frontend application for car booking
    //             using a modern stack including NodeJS, EJS, ReactJS, and NextJS.
    //             The project aimed at providing a user-friendly interface for
    //             booking vehicles, improving the service accessibility for users.
    //           </li>
    //         </ul>
    //       </div>

    //       <div>
    //         <h3 className="mb-1 flex flex-col text-2xl font-medium text-zinc-800 md:flex-row md:items-baseline md:gap-2 dark:text-zinc-200">
    //           Fullstack Engineering
    //           <span className="text-base font-light text-zinc-400 md:text-lg">
    //             AUG 2021 - JAN 2022
    //           </span>
    //         </h3>
    //         <p className="text-secondary mb-3 text-lg">
    //           Bootcamp Frontend Developer By Alterra Academy
    //         </p>
    //         <ul className="space-y-3">
    //           <li className="inline-flex items-start gap-2">
    //             <div className="bg-secondary mt-2 h-2 w-2 flex-none" />
    //             Developed a comprehensive Calories Tracker & Hospital Management
    //             System, using a Golang backend for efficient data handling and a
    //             ReactJS frontend for a smooth user experience. The project
    //             supported hospital management and health tracking
    //             functionalities.
    //           </li>
    //         </ul>
    //         <div className="mt-2 grid hidden grid-cols-1 gap-4 md:grid-cols-2">
    //           <div className="h-40 w-full rounded-lg bg-zinc-200 object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 dark:bg-zinc-800"></div>
    //           <div className="h-40 w-full rounded-lg bg-zinc-200 object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 dark:bg-zinc-800"></div>
    //         </div>
    //       </div>

    //       <div>
    //         <h3 className="mb-1 flex flex-col text-2xl font-medium text-zinc-800 md:flex-row md:items-baseline md:gap-2 dark:text-zinc-200">
    //           Cloud Computing
    //           <span className="text-base font-light text-zinc-400 md:text-lg">
    //             FEB 2021 - JUL 2021
    //           </span>
    //         </h3>
    //         <p className="text-secondary mb-3 text-lg">
    //           Bangkit Academy By Google, Tokopedia, Gojek, & Traveloka
    //         </p>
    //         <ul className="space-y-3">
    //           <li className="inline-flex items-start gap-2">
    //             <div className="bg-secondary mt-2 h-2 w-2 flex-none" />
    //             Collaborated on a capstone project to develop a machine learning
    //             application that estimates calories from food images. Integrated
    //             with Firebase and deployed on Google Cloud, this project
    //             utilized cloud balancing to optimize resource use and enhance
    //             application performance.
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   ),
    // },
  ];

  return (
    <section id="experience" className="py-16">
      <Timeline data={timelineData} />
    </section>
  );
}
