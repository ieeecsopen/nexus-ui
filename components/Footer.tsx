import React from 'react';
import { Github, Twitter, MessageCircle, Command } from 'lucide-react';
import { FOOTER_LINKS, SOCIAL_LINKS, ViewType } from '../constants';

interface Props {
  onNavigate: (view: ViewType) => void;
}

const Footer: React.FC<Props> = ({ onNavigate }) => {
  const handleClick = (e: React.MouseEvent, view: ViewType) => {
    e.preventDefault();
    onNavigate(view);
  };

  return (
    <footer className="border-t border-white/[0.08] bg-black py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-200 to-white flex items-center justify-center text-black">
                <Command size={14} strokeWidth={3} />
              </div>
              <span className="text-lg font-medium text-white">Nexus Kit</span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Premium UI library for React developers. Built with Tailwind CSS and NexusUI.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Product</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.label}>
                  <a
                    href="#"
                    onClick={(e) => handleClick(e, link.view)}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Resources</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href="#"
                    onClick={(e) => handleClick(e, link.view)}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href="#"
                    onClick={(e) => handleClick(e, link.view)}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">© 2024 Nexus Kit Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href={SOCIAL_LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
              aria-label="Discord"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;