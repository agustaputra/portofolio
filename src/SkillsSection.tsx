import React, { useState } from 'react';
import { Code, Atom, Wind, Database, Server, Network, GitBranch, Container, Figma } from 'lucide-react';

// Define the type for a skill
interface Skill {
  name: string;
  level: number;
  category: string;
}

// Define the skills array with type annotations
const skills: Skill[] = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 75, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories: string[] = ["all", "frontend", "backend", "tools"];

// Define the props for SkillIcon component
interface SkillIconProps {
  name: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ name }) => {
  const iconSize = 22; 
  const iconClassName = "text-primary";

  switch (name.toLowerCase()) {
    case "html/css":
      return <Code size={iconSize} className={iconClassName} />;
    case "javascript":
      return <Code size={iconSize} className={iconClassName} />;
    case "react":
      return <Atom size={iconSize} className={iconClassName} />;
    case "typescript":
      return <Code size={iconSize} className={iconClassName} />;
    case "tailwind css":
      return <Wind size={iconSize} className={iconClassName} />;
    case "next.js":
      return <Atom size={iconSize} className={iconClassName} />;
    case "node.js":
      return <Server size={iconSize} className={iconClassName} />;
    case "express":
      return <Server size={iconSize} className={iconClassName} />;
    case "mongodb":
      return <Database size={iconSize} className={iconClassName} />;
    case "postgresql":
      return <Database size={iconSize} className={iconClassName} />;
    case "graphql":
      return <Network size={iconSize} className={iconClassName} />;
    case "git/github":
      return <GitBranch size={iconSize} className={iconClassName} />;
    case "docker":
      return <Container size={iconSize} className={iconClassName} />;
    case "figma":
      return <Figma size={iconSize} className={iconClassName} />;
    case "vs code":
      return <Code size={iconSize} className={iconClassName} />;
    default:
      return null;
  }
};

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 hover:bg-primary/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card p-6 rounded-lg shadow-xs card-hover transition-all duration-200 hover:ring-2 hover:ring-white/30"
            >
              <div className="flex items-center gap-3 text-left mb-4">
                <SkillIcon name={skill.name} />
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
