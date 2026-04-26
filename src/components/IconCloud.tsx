import { IconCloud } from "./magicui/icon-cloud";


const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "microsoftazure",
  "linux",
  "docker",
  "terraform",
  "git",
  "github",
  "visualstudiocode",
  "mongodb",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
