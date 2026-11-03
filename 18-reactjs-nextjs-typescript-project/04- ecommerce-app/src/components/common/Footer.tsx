import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Arashad-Ahamad", icon: FiGithub },
  { label: "Twitter", href: "https://x.com/ArashadAhamad10", icon: FiTwitter },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arashad-ahamad-768935337/",
    icon: FiLinkedin,
  },
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-gray-900 text-gray-300 dark:border-t">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-start">
          {/* Brand - Left Side */}
          <div className="text-center sm:text-left">
            <h3 className="mb-3 text-xl font-bold text-white">ShopHub</h3>
            <p className="max-w-md text-sm leading-relaxed text-gray-400">
              A modern e-commerce web app built with Next.js, TypeScript, Redux Toolkit,
              Tailwind CSS and Shadcn UI.
            </p>
            <div className="mt-4 flex justify-center gap-4 sm:justify-start">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition hover:text-white"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Right Side */}
          <div className="text-center sm:text-right">
            <h4 className="mb-3 font-semibold text-white">Quick Links</h4>
            <ul className="flex flex-wrap justify-center gap-3 text-xs sm:justify-end sm:gap-4 sm:text-sm">
              <li>
                <Link href="/" className="text-gray-400 transition hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-400 transition hover:text-white">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} ShopHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
