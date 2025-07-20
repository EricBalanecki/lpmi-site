import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  year: string;
  description: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
  logoSrc?: string;
}

export default function ProjectCard({
  title,
  year,
  description,
  tags,
  imageSrc,
  imageAlt,
  logoSrc,
}: ProjectCardProps) {
  return (
    <Card className="bg-background rounded-2xl shadow-lg overflow-hidden border-0 min-h-[420px] flex flex-col">
      <div className="h-48 flex items-center justify-center bg-white">
        <Image
          src={logoSrc || imageSrc}
          alt={imageAlt}
          width={200}
          height={120}
          className="object-contain w-full h-full p-4"
        />
      </div>
      <CardContent className="p-8 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <span className="text-sm text-muted-foreground">{year}</span>
        </div>
        <p className="text-muted-foreground mb-6">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 