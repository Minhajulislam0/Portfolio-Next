"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectData = [
  {
    id: 1,
    title: "Game Hub",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi unde, saepe sint expedita facere nihil sed sunt quaerat, quia maiores dolorum sequi quas.",
    image: "/images/projects/game-hub.png",
    code: "https://github.com/Minhajulislam0/Game-collection",
    preview: "https://game-collection-three.vercel.app/",
    tag: ["All", "Next.js"],
  },
  {
    id: 2,
    title: "Asset Exchange",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi unde, saepe sint expedita facere nihil sed sunt quaerat, quia maiores dolorum sequi quas.",
    image: "/images/projects/realState.png",
    code: "https://github.com/Minhajulislam0/Real_State",
    preview: "https://assetexchange.netlify.app/",
    tag: ["All", "React.js"],
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProject = projectData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Next.js"
          isSelected={tag === "Next.js"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React.js"
          isSelected={tag === "React.js"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="JavaScript"
          isSelected={tag === "JavaScript"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProject.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.code}
            previewUrl={project.preview}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
