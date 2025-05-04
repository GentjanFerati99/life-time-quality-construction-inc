"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Roofing", href: "/services/roofing" },
    { name: "Siding", href: "/services/siding" },
    { name: "Gutters", href: "/services/gutters" },
    { name: "Skylight", href: "/services/skylight" },
    { name: "Flat Roof", href: "/services/flat-roof" },
    { name: "Chimney", href: "/services/chimney" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        " fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 shadow-md backdrop-blur-sm"
          : "bg-white/75"
      )}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold tracking-tight text-red-700 dark:text-red-500">
              LIFETIME QUALITY
            </span>
            <span className="hidden sm:inline-block text-xl font-bold ml-2 tracking-tight">
              CONSTRUCTION INC.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  pathname === link.href
                    ? "text-red-700 dark:text-red-500 bg-red-50 dark:bg-red-950/30"
                    : "text-gray-700 dark:text-gray-300 hover:text-red-700 dark:hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              className="ml-2 bg-red-700 hover:bg-red-800 text-white"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    pathname === link.href
                      ? "text-red-700 dark:text-red-500 bg-red-50 dark:bg-red-950/30"
                      : "text-gray-700 dark:text-gray-300 hover:text-red-700 dark:hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                asChild
                className="bg-red-700 hover:bg-red-800 text-white w-full mt-2"
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
