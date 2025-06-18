"use client";

import Link from "next/link";
import { Cpu, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import type { NavItem } from "@/types";
import { usePathname } from 'next/navigation';

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "AI Summarizer", href: "/ai-summarizer" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled || pathname !== "/" ? "bg-background/80 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="LDS Data Solutions Home">
          <Cpu className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-primary">LDS Data Solutions</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.href) ? "text-primary font-semibold" : "text-foreground/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open mobile menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="mb-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <Cpu className="h-7 w-7 text-primary" />
                  <span className="text-xl font-bold text-primary">LDS Data Solutions</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close mobile menu">
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`block rounded-md px-3 py-2 text-base font-medium hover:bg-secondary hover:text-primary ${
                      isActive(item.href) ? "bg-secondary text-primary" : "text-foreground"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
