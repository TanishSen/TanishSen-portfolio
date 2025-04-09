"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { AnimatedCard } from "@/components/ui/animated-card";
import Image from "next/image";
import { ExternalLinkIcon } from "lucide-react";

interface IProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
}

const projectsData: IProjectData[] = [
  {
    id: 1,
    title: "Portfolio Bento",
    description:
      "Landing page for SeaPhantom, an NFT project focusing on innovative and sustainable technologies. Explore the world of NFTs and peer-to-peer trading on the SeaPhantom platform.",
    image:
      "https://res.cloudinary.com/deselamak/image/upload/v1731132621/portofolio/rjwnyaeifqmneuflt3it.png",
    url: "https://seaphantom.com",
  },
  {
    id: 2,
    title: "SeaPhantom Landing Page",
    description:
      "Landing page for SeaPhantom, an NFT project focusing on innovative and sustainable technologies. Explore the world of NFTs and peer-to-peer trading on the SeaPhantom platform.",
    image:
      "https://res.cloudinary.com/deselamak/image/upload/v1699777135/portofolio/y2l1g36bjudgsf6yr0eg.webp",
    url: "https://seaphantom.com",
  },
  {
    id: 3,
    title: "SeaPhantom P2P Rum Token Escrow Trading",
    description:
      "Engage in NFT trading with the P2P Rum Token Escrow Trading project. This platform facilitates secure and transparent NFT transactions.",
    image:
      "https://res.cloudinary.com/deselamak/image/upload/v1699777135/portofolio/fphb7ddemp4ixeutav1b.webp",
    url: "https://auth.seaphantom.com/",
  },
  {
    id: 4,
    title: "Labgrownbeasts Company Profile",
    description:
      "Explore the Labgrownbeasts Company Profile, showcasing innovation and excellence in the field. Learn about our vision, mission, and the cutting-edge work we do.",
    image:
      "https://res.cloudinary.com/deselamak/image/upload/v1699777135/portofolio/mqprcb6todunicq4cg0a.webp",
    url: "https://labgrownbeasts.com/",
  },
  {
    id: 5,
    title: "Gold Apple Token",
    description:
      "Explore the Labgrownbeasts Company Profile, showcasing innovation and excellence in the field. Learn about our vision, mission, and the cutting-edge work we do.",
    image:
      "https://res.cloudinary.com/deselamak/image/upload/v1731218154/portofolio/btj1gqvxgej1cgbqm6zf.png",
    url: "https://labgrownbeasts.com/",
  },
  {
    id: 6,
    title: "Daily Calories Apps",
    description:
      "Explore the Labgrownbeasts Company Profile, showcasing innovation and excellence in the field. Learn about our vision, mission, and the cutting-edge work we do.",
    image:
      "https://res.cloudinary.com/deselamak/image/upload/v1731218151/portofolio/irby71t9knqrf3y5jogn.png",
    url: "https://labgrownbeasts.com/",
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [selectedProject, setSelectedProject] = useState<IProjectData | null>(
    null
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const openProject = (project: IProjectData) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-16" ref={ref}>
      <motion.div
        className="mx-auto max-w-screen-xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          className="section-heading mb-12 text-center"
          variants={itemVariants}
        >
          Digital Compositions
        </motion.h2>

        <motion.h3
          className="mb-12 max-w-4xl mx-auto text-center text-lg text-zinc-700 dark:text-zinc-300"
          variants={itemVariants}
        >
          projects will be added soon...
        </motion.h3>

        {/* ---projects will be added -- */}
      </motion.div>
    </section>
  );
}
