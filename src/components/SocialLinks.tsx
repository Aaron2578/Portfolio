import { Github, Linkedin, Mail } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex items-center space-x-12">
      {/* GitHub */}
      <a
        href="https://github.com/aaron2578"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors duration-700"
      >
        <Github size={28} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/aaron-dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors duration-700"
      >
        <Linkedin size={28} />
      </a>

      {/* Mail */}
      <a
        href="mailto:aaronc2578@gmail.com"
        className="text-gray-400 hover:text-white transition-colors duration-700"
      >
        <Mail size={28} />
      </a>
    </div>
  );
}
