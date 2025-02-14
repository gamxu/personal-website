import {
  ContentType,
  getAllContent,
  getContentBySlug,
} from "@/lib/markdownProcess";
import { Props } from "@/lib/types";
import { formatDateRange } from "@/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const projects = await getAllContent(ContentType.WORKS);
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ExperienceDetailPage({
  params,
}: Readonly<Props>) {
  const slug = (await params).slug;
  const project = await getContentBySlug(ContentType.WORKS, slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto px-8 md:px-20 lg:px-40 py-[25px] pb-[100px]">
      <h1 className="text-3xl text-white-primary font-semibold mb-2">
        {project.title}
      </h1>

      <div className="mb-6 font-light text-white-secondary">
        {formatDateRange(project.startDate, project.endDate)}
      </div>

      <div
        className="prose prose-p:text-white-primary prose-p:text-base prose-p:font-light prose-a:font-light prose-a:text-blue-400
        prose-p:leading-loose max-w-none prose-ul:font-light prose-ul:text-white-primary prose-"
        dangerouslySetInnerHTML={{ __html: project.content }}
      />
      <div className="flex justify-center">
        <Image
          src={"/contents/works-img/" + project.imgPath}
          alt={project.title}
          width={1000}
          height={1000}
          className="rounded-sm shadow-top-bottom shrink h-auto w-[90%] md:w-[50%] mt-10"
        />
      </div>
    </article>
  );
}
