import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <div className="relative w-48 h-48 rounded-full overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Brandon Capdevielle"
              fill
              sizes="(max-width: 768px) 192px, 192px"
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Brandon Capdevielle</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">Full Stack Developer</p>
          </div>
        </div>

        <div className="max-w-2xl text-center sm:text-left">
          <p className="mb-6">
          Hi, I’m Brandon Capdevielle — a passionate and detail-oriented software developer based in Austin, TX, with over four years of experience building scalable, efficient, and user-focused software solutions. I specialize in backend development, cloud architecture, and API integrations, and I’m driven by a love for clean code, collaborative problem-solving, and continuous learning.
          </p>
          <p className="mb-6">
          Currently, I’m the Technical Co-Founder at Revlend, where I lead product development and architecture for a fintech platform tailored to the construction industry. I’ve previously worked as a Backend Engineer at XpenseXpert, building out Node.js services for an AI-driven finance platform, and as an Integration Developer at Saint Edward’s University, where I delivered impactful solutions across academic and administrative systems using Boomi and cloud-based tools.
          </p>
          <p className="mb-6">
          My technical toolkit includes a wide range of languages and technologies such as JavaScript, Python, C++, Java, Node.js, Flask, .NET, AWS (Lambda, EC2, DynamoDB, S3), MongoDB, SQL, and React. I’m equally comfortable diving into DevOps pipelines, crafting RESTful APIs, or leading a team through the SDLC.
          </p>
          <p className="mb-6">
          Whether I’m launching a new MVP or optimizing existing systems, I bring a balance of strong engineering fundamentals, a user-first mindset, and a commitment to delivering high-value software.
          </p>
          <p className="mb-6">
          Let’s build something great together.
          </p>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="projects"
          >
            View My Work
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
            href="contact"
          >
            Contact Me
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/bcapdevi"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://linkedin.com/in/brandon-capdevielle"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </footer>
    </div>
  );
}