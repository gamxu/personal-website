import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { CardProps } from "./types";

// Updated Types for content data
export interface ContentData extends CardProps {
  description: string;
  content: string;
}

// Enum for content types
export enum ContentType {
  WORKS = "works-post",
  RESOURCES = "resources-post",
}

export const getContentDirectory = (type: ContentType) => {
  return path.join(process.cwd(), `/public/contents/${type}`);
};

export const getAllContent = async (
  type: ContentType
): Promise<ContentData[]> => {
  const contentDirectory = getContentDirectory(type);
  const filenames = fs.readdirSync(contentDirectory);

  const allContentData = await Promise.all(
    filenames.map(async (filename) => {
      // Remove ".md" or ".mdx" from filename to get slug
      const slug = filename.replace(/\.(md|mdx)$/, "");

      // Read markdown file as string
      const fullPath = path.join(contentDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Use remark to convert markdown into HTML string
      const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
      const content = processedContent.toString();

      return {
        slug,
        content,
        ...(matterResult.data as Omit<ContentData, "slug" | "content">),
      };
    })
  );

  // Sort content by startDate (most recent first)
  return allContentData.sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateB.getTime() - dateA.getTime();
  });
};

export const getContentBySlug = async (
  type: ContentType,
  slug: string
): Promise<ContentData | null> => {
  try {
    // Remove any existing extension from the slug
    const cleanSlug = slug.replace(/\.(md|mdx)$/, "");

    // Try both .mdx and .md extensions
    let fullPath = path.join(getContentDirectory(type), `${cleanSlug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      fullPath = path.join(getContentDirectory(type), `${cleanSlug}.md`);
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const content = processedContent.toString();

    return {
      slug,
      content,
      ...(matterResult.data as Omit<ContentData, "slug" | "content">),
    };
  } catch {
    return null;
  }
};

// Utility function to format date range
export const formatDateRange = (
  startDate: string,
  endDate?: string
): string => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : "";

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  };

  return end ? `${formatDate(start)} - ${formatDate(end)}` : formatDate(start);
};
