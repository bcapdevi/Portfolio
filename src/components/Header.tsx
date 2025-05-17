import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-4xl mx-auto px-8 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg hover:text-gray-600 dark:hover:text-gray-300">
          Brandon Capdevielle
        </Link>
        
        <div className="flex gap-6">
          <Link 
            href="/" 
            className="hover:text-gray-600 dark:hover:text-gray-300"
          >
            Home
          </Link>
          <Link 
            href="/projects" 
            className="hover:text-gray-600 dark:hover:text-gray-300"
          >
            Projects
          </Link>
          <Link 
            href="/contact" 
            className="hover:text-gray-600 dark:hover:text-gray-300"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}