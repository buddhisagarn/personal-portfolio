import "./Footer.css";
export default function Footer() {
  return (
    <footer className="bg-black-900 text-white px-8 py-12">
      <div className="max-w-7xl mx-auto flex flex-row md:flex-row justify-around items-start gap-8">
        {/* About Me */}
        <div className="max-w-sm">
          <h2 className="text-xl font-semibold mb-4">About Me</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            Passionate and results-driven developer with a keen eye for design
            and detail. I build intuitive, responsive, and user-friendly digital
            experiences that connect creativity with functionality.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#experience" className="hover:text-white transition">
                Experience
              </a>
            </li>
            <li>
              <a href="#interests" className="hover:text-white transition">
                Interests
              </a>
            </li>
            <li>
              <a href="#career" className="hover:text-white transition">
                Career
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Connect With Me</h2>
          <div className="flex gap-5 space-x-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.67H4.7v13.33H.22V8.67zM8.6 8.67h4.12v1.79h.06c.57-1.08 1.95-2.21 4.01-2.21 4.29 0 5.08 2.82 5.08 6.49v7.26h-4.49v-6.43c0-1.53-.03-3.49-2.13-3.49-2.14 0-2.47 1.67-2.47 3.39v6.53H8.6V8.67z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.2 11.45c.6.11.82-.26.82-.58v-2.16c-3.34.73-4.04-1.61-4.04-1.61-.54-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.77-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.24a11.5 11.5 0 016 0c2.29-1.56 3.3-1.24 3.3-1.24.66 1.64.24 2.86.12 3.16.77.85 1.24 1.93 1.24 3.25 0 4.63-2.81 5.66-5.49 5.95.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.83.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M24 4.56c-.89.39-1.84.65-2.84.77a4.93 4.93 0 002.16-2.72 9.86 9.86 0 01-3.13 1.19 4.92 4.92 0 00-8.39 4.49A13.97 13.97 0 011.67 3.15a4.92 4.92 0 001.52 6.56A4.88 4.88 0 01.96 9v.06a4.93 4.93 0 003.95 4.83 4.95 4.95 0 01-2.21.08 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 21.54a13.93 13.93 0 007.55 2.21c9.05 0 14-7.5 14-14v-.64A10.03 10.03 0 0024 4.56z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Buddhi Sagar Nyaupane. All rights
        reserved.
      </div>
    </footer>
  );
}
