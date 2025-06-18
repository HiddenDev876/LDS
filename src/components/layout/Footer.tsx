import { Cpu, Copyright, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Our Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { label: "LinkedIn", href: "#", icon: Linkedin },
    { label: "Twitter", href: "#", icon: Twitter },
    { label: "Facebook", href: "#", icon: Facebook },
    { label: "Instagram", href: "#", icon: Instagram },
  ];

  return (
    <footer className="bg-primary py-12 text-primary-foreground border-t-2 border-accent/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start text-center md:text-left">
          <div className="flex flex-col items-center md:items-start md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3 group">
              <Cpu className="h-9 w-9 text-accent transition-transform group-hover:rotate-12" />
              <span className="text-2xl font-bold text-primary-foreground group-hover:text-accent/90 transition-colors">LDS Data Solutions</span>
            </Link>
            <p className="text-sm text-primary-foreground/70 max-w-xs">
              Providing exceptional BPO and Data services to help your business thrive in the digital age.
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-accent mb-3">Quick Links</h3>
            <ul className="space-y-1.5">
              {footerLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-accent hover:underline transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-accent mb-3">Get In Touch</h3>
            <p className="text-sm text-primary-foreground/80">
              Have a project or query?
            </p>
            <a href="mailto:info@ldsdatasolutions.in" className="text-sm text-accent hover:text-accent/80 hover:underline transition-colors block mt-1">
              info@ldsdatasolutions.in
            </a>
             <p className="text-sm text-primary-foreground/80 mt-2">
              We're ready to collaborate and innovate with you.
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-accent mb-3">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map(social => (
                <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                  className="text-primary-foreground/80 hover:text-accent transition-colors">
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-accent/50 text-center">
          <p className="text-xs text-primary-foreground/60 flex items-center justify-center">
            <Copyright className="h-3.5 w-3.5 mr-1.5" /> {currentYear} LDS Data Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
