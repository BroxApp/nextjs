import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';


export default function SocialLinks() {
  return (
    <div className="fixed left-10 bottom-0 z-10 hidden md:flex">
      <ul className="flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-gray-100 after:mt-10">
        <li>
          <a href="https://github.com/..." target="_blank" rel="noreferrer"
             className="text-gray-300 hover:text-amber-500 hover:-translate-y-1 transition-all inline-block">
            <FaGithub size={20} />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/..." target="_blank" rel="noreferrer"
             className="text-gray-300 hover:text-amber-500 hover:-translate-y-1 transition-all inline-block">
            <FaInstagram size={20} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/..." target="_blank" rel="noreferrer"
             className="text-gray-300 hover:text-amber-500 hover:-translate-y-1 transition-all inline-block">
            <FaTwitter size={20} />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/..." target="_blank" rel="noreferrer"
             className="text-gray-300 hover:text-amber-500 hover:-translate-y-1 transition-all inline-block">
            <FaLinkedin size={20} />
          </a>
        </li>
      </ul>
    </div>
  );
}