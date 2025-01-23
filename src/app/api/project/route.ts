import { ContentType, getAllContent } from "@/lib/markdownProcess";
import { NextResponse } from "next/server";

export async function GET() {
  const projects = await getAllContent(ContentType.WORKS);
  return NextResponse.json(projects);
}
