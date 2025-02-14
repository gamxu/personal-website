import ExpandDivider from "@/components/common/dividerExpand";
import ResourceCard from "@/components/common/ResourceCard";
import { ContentType, getAllContent } from "@/lib/markdownProcess";
import React from "react";

export default async function ResourceListingPage() {
  const projects = await getAllContent(ContentType.RESOURCES);
  return (
    <div className="px-8 md:px-20 lg:px-40 pt-[10px] pb-[100px]">
      <p className="text-[32px] font-medium animate-slideInLeft_1">
        My Resources
      </p>
      <ExpandDivider />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-8 mt-[15px]">
        {projects.map((project) => (
          <ResourceCard
            key={project.slug}
            title={project.title}
            imgPath={project.imgPath}
            slug={project.slug}
            category={project.category}
            description={project.description}
            startDate={project.startDate}
            endDate={project.endDate}
          />
        ))}
      </div>
    </div>
  );
}
