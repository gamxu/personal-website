import WorkCard from "@/components/common/WorkCard";
import { ContentType, getAllContent } from "@/lib/markdownProcess";
import React from "react";

export default async function ExperienceListingPage() {
  const projects = await getAllContent(ContentType.WORKS);
  return (
    <div className="px-8 md:px-20 lg:px-40 py-[25px]">
      <p className="text-[32px] font-medium">My Works</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-8 mt-[25px]">
        {projects.map((project) => (
          <WorkCard
            key={project.slug}
            title={project.title}
            imgPath={project.imgPath}
            startDate={project.startDate}
            endDate={project.endDate}
            slug={project.slug}
            category={project.category}
          />
        ))}
      </div>
    </div>
  );
}
