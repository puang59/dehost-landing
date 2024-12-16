"use client";
import React, { useEffect } from "react";
import { ArrowUpRight, Menu } from "@geist-ui/icons";
import { Dock } from "@/components/ui/dock";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    if (pathname === "/") {
      const section = document.querySelector(`[data-section="${sectionId}"]`);
      if (section) {
        const offset = 100;
        const elementPosition =
          section.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        setIsMenuOpen(false);
      }
    } else {
      window.location.href = `/?scrollTo=${sectionId}`;
    }
  };

  useEffect(() => {
    if (pathname === "/") {
      const urlParams = new URLSearchParams(window.location.search);
      const scrollTo = urlParams.get("scrollTo");
      if (scrollTo) {
        setTimeout(() => {
          const section = document.querySelector(
            `[data-section="${scrollTo}"]`,
          );
          if (section) {
            const offset = 100;
            const elementPosition =
              section.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 100);
      }
    }
  }, [pathname]);

  return (
    <div className="relative">
      <Dock
        direction="middle"
        className="border-secondary w-[70%] md:w-[40%] justify-between mt-4 fixed left-0 right-0 bg-primary bg-opacity-70 backdrop-blur-md z-50"
      >
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-evenly w-full items-center h-12 px-2 gap-10">
            {/* Logo */}
            <div className="flex flex-row items-center flex-shrink-0">
              <Link href={"/"} className="flex flex-row items-center">
                <img
                  src="/dehost-navbar.png"
                  alt="dehost"
                  width={30}
                  height={30}
                />
                <h1 className="text-white font-bold text-lg ml-2">DeHost</h1>
              </Link>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex flex-row gap-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Features
              </button>
              <Link
                href="/blog"
                className="text-gray-300 hover:text-white cursor-pointer"
              >
                Blog
              </Link>
            </div>
            {/* Waitlist button - hidden on mobile */}
            <button
              className="hidden md:flex items-center justify-center gap-1 bg-purple-500  text-white bg-accent bg-opacity-50 px-4 py-2 rounded-full font-medium hover:bg-[#c72bff] hover:bg-opacity-70 transition-colors text-md whitespace-nowrap"
            >
                Sign Up
            </button>
            <button
              className="md:hidden flex items-center justify-center ml-4"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu size={24} color="white" />
            </button>
          </div>
          {/* Mobile Menu with smooth height animation */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-48" : "max-h-0"
            }`}
          >
            <div className="flex flex-col py-4 space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Features
              </button>
              <Link
                href="/blog"
                className="text-gray-300 hover:text-white cursor-pointer flex items-center justify-center"
              >
                Blog
              </Link>
              <button
                className=" items-center justify-center gap-1 text-white bg-accent bg-opacity-50 px-4 py-2 rounded-full font-medium hover:bg-[#c72bff] hover:bg-opacity-70 transition-colors text-md whitespace-nowrap"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </Dock>
    </div>
  );
}
