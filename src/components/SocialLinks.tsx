import { Github, Linkedin, Mail } from "lucide-react";
import { SiCredly } from "react-icons/si";

export default function SocialLinks() {
  return (
    <div className="flex items-center space-x-10">
      {/* GitHub */}
      <a
        href="https://github.com/aaron2578"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-gray-400 hover:text-white transition-colors duration-700"
      >
        <Github size={25} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/aaron-dev/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-gray-400 hover:text-white transition-colors duration-700"
      >
        <Linkedin size={25} />
      </a>

      {/* Mail */}
      <a
        href="mailto:aaronc2578@gmail.com"
        aria-label="Email"
        className="text-gray-400 hover:text-white transition-colors duration-700"
      >
        <Mail size={25} />
      </a>

      {/* Credly */}
      <a
        href="https://www.credly.com/users/aaroncharles/edit/badges/credly"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Credly"
        title="Credly Profile & Badges"
        className="text-gray-400 hover:text-white transition-colors duration-700"
      >
        <SiCredly size={25} />
      </a>

    </div>
  );
}
