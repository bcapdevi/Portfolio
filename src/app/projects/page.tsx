import ProjectCard from './components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: "Revlend Platform",
      description: "A fintech platform tailored to the construction industry, featuring automated lending workflows and risk assessment tools.",
      technologies: ["Node.js", "React", "AWS"],
      url: "https://revlend.co",
    },
    {
      title: "XpenseXpert Services",
      description: "AI-driven finance platform with automated expense tracking and analysis capabilities.",
      technologies: ["Python", "Flask", "MongoDB"],
      url: "https://github.com/bcapdevi/XpenseXpert-BE",
    },
  ];

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              url={project.url}  // Add this line
            />
          ))}
        </div>
      </main>
    </div>
  );
}