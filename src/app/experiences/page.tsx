"use client";

import ExpandDivider from "@/components/common/dividerExpan";
import WorkCard from "@/components/common/WorkCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ContentData } from "@/lib/markdownProcess";
import React, { useEffect, useState } from "react";

export default function ExperienceListingPage() {
  const [projects, setProjects] = useState<ContentData[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Fetch data on mount
  useEffect(() => {
    async function loadProjects() {
      const res = await fetch("/api/project");
      const allProjects: ContentData[] = await res.json();
      setProjects(allProjects);

      // Extract unique categories
      const uniqueCategories: string[] = Array.from(
        new Set(allProjects.map((project) => project.category))
      );
      setCategories(uniqueCategories);
    }
    loadProjects();
  }, []);

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="px-8 md:px-20 lg:px-40 pt-[10px] pb-[100px]">
      <div className="flex flex-row justify-between items-center">
        <p className="text-[32px] font-medium animate-slideInLeft_1">
          My Works
        </p>
        <div className="w-[130px]">
          <Select
            value={selectedCategory}
            onValueChange={(value) => setSelectedCategory(value)}
          >
            <SelectTrigger className="text-white capitalize bg-transparent border-2 border-gray-400">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category} className="capitalize">
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <ExpandDivider />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-8 mt-[15px]">
        {filteredProjects.map((project) => (
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
