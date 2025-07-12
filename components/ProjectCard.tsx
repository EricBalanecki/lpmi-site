import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  year: string;
  description: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
}

export default function ProjectCard({
  title,
  year,
  description,
  tags,
  imageSrc,
  imageAlt,
}: ProjectCardProps) {
  return (
    <Card className="bg-background rounded-2xl shadow-lg overflow-hidden border-0">
      <div className="h-48 flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
      <CardContent className="p-8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <span className="text-sm text-muted-foreground">{year}</span>
        </div>
        <p className="text-muted-foreground mb-6">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 