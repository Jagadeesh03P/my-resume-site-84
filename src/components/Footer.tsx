import { Mail, Linkedin, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Jagadeesh P</h3>
            <p className="text-sm opacity-90">
              Electronics & Communication Engineer specializing in IoT, Machine Learning & Web Development
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#skills" className="opacity-90 hover:opacity-100 hover:text-primary smooth-transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="opacity-90 hover:opacity-100 hover:text-primary smooth-transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="opacity-90 hover:opacity-100 hover:text-primary smooth-transition">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="opacity-90 hover:opacity-100 hover:text-primary smooth-transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 opacity-90">
                <Mail className="w-4 h-4" />
                <a href="mailto:jagadeeshsivam313@gmail.com" className="hover:text-primary smooth-transition">
                  jagadeeshsivam313@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 opacity-90">
                <Linkedin className="w-4 h-4" />
                <a
                  href="https://www.linkedin.com/in/jagadeesh-p-76b604255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary smooth-transition"
                >
                  LinkedIn Profile
                </a>
              </li>
              <li className="flex items-center gap-2 opacity-90">
                <MapPin className="w-4 h-4" />
                <span>Coimbatore, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} Jagadeesh P. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
