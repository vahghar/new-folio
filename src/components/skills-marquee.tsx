"use client";

import React from "react";

interface Skill {
  name: string;
  slug: string;
  color: string;
}

const row1: Skill[] = [
  { name: "React", slug: "react", color: "#61DAFB" },
  { name: "Next.js", slug: "nextdotjs", color: "#ffffff" },
  { name: "TypeScript", slug: "typescript", color: "#3178C6" },
  { name: "JavaScript", slug: "javascript", color: "#F7DF1E" },
  { name: "TailwindCSS", slug: "tailwindcss", color: "#06B6D4" },
  { name: "HTML5", slug: "html5", color: "#E34F26" },
  { name: "Framer Motion", slug: "framer", color: "#0055FF" },
];

const row2: Skill[] = [
  { name: "Node.js", slug: "nodedotjs", color: "#5FA04E" },
  { name: "Express", slug: "express", color: "#ffffff" },
  { name: "PostgreSQL", slug: "postgresql", color: "#4169E1" },
  { name: "MongoDB", slug: "mongodb", color: "#47A248" },
  { name: "Prisma", slug: "prisma", color: "#2D3748" },
  { name: "Docker", slug: "docker", color: "#2496ED" },
  { name: "Terraform", slug: "terraform", color: "#7B42BC" },
  { name: "Azure", slug: "microsoftazure", color: "#0078D4" },
  { name: "Linux", slug: "linux", color: "#FCC624" },
  { name: "Git", slug: "git", color: "#F05032" },
  { name: "GitHub", slug: "github", color: "#ffffff" },
];

function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <div className="skill-badge flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm whitespace-nowrap select-none">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://cdn.simpleicons.org/${skill.slug}`}
        alt={skill.name}
        width={18}
        height={18}
        className="shrink-0"
        style={{ filter: skill.color === "#ffffff" ? "invert(1)" : "none" }}
      />
      <span className="text-sm font-medium text-foreground/80">{skill.name}</span>
    </div>
  );
}

function MarqueeRow({
  skills,
  reverse = false,
}: {
  skills: Skill[];
  reverse?: boolean;
}) {
  // Duplicate for seamless loop
  const doubled = [...skills, ...skills];

  return (
    <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex gap-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ width: "max-content" }}
      >
        {doubled.map((skill, i) => (
          <SkillBadge key={`${skill.slug}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export function SkillsMarquee() {
  return (
    <div className="flex flex-col gap-4 w-full py-4">
      <MarqueeRow skills={row1} />
      <MarqueeRow skills={row2} reverse />
    </div>
  );
}
