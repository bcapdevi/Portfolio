type ProjectCardProps = {
    title: string;
    description: string;
    technologies: string[];
    url?: string;
  };
  
export default function ProjectCard({ title, description, technologies, url }: ProjectCardProps) {
    const CardWrapper = ({ children }: { children: React.ReactNode }) => {
        if (url) {
            return (
                <a 
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-transform hover:-translate-y-1"
                >
                    {children}
                </a>
            );
        }
        return <>{children}</>;
    };

    return (
        <CardWrapper>
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 h-full transition-colors hover:bg-gray-50 dark:hover:bg-gray-900">
                <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <span 
                            key={tech}
                            className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </CardWrapper>
    );
}