export default function Footer() {
    return (
      <footer className="w-full border-t border-gray-200 dark:border-gray-800 mt-auto">
        <div className="max-w-4xl mx-auto px-8 py-4 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Brandon Capdevielle. All rights reserved.
          </p>
          
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a
              href="https://github.com/bcapdevi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/brandon-capdevielle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    );
  }