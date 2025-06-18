import { Cpu, Copyright } from "lucide-react";
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

  return (
    <footer className="bg-secondary py-12 text-secondary-foreground border-t-2 border-primary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 mb-3 group">
              <Cpu className="h-9 w-9 text-primary transition-transform group-hover:rotate-12" />
              <span className="text-2xl font-bold text-primary group-hover:text-primary/90 transition-colors">LDS Data Solutions</span>
            </Link>
            <p className="text-sm text-foreground/70 max-w-xs">
              Providing exceptional BPO and Data services to help your business thrive in the digital age.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-3">Quick Links</h3>
            <ul className="space-y-1.5">
              {footerLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-foreground/80 hover:text-primary hover:underline transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-primary mb-3">Get In Touch</h3>
            <p className="text-sm text-foreground/80">
              Have a project or query?
            </p>
            <a href="mailto:info@ldsdatasolutions.in" className="text-sm text-accent hover:text-accent/80 hover:underline transition-colors block mt-1">
              info@ldsdatasolutions.in
            </a>
             <p className="text-sm text-foreground/80 mt-2">
              We're ready to collaborate and innovate with you.
            </p>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-border/50 text-center">
          <p className="text-xs text-foreground/60 flex items-center justify-center">
            <Copyright className="h-3.5 w-3.5 mr-1.5" /> {currentYear} LDS Data Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
