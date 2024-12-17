import Image from "next/image";
import GradualSpacing from "@/components/ui/gradual-spacing";

import About from "@/components/About";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-transparent to-transparent" />
      
      {/* Hero content */}
      <div className="relative px-4 pt-32 mx-auto max-w-7xl sm:pt-40 lg:px-6">
        <div className="max-w-4xl mx-auto text-center mt-10">
          <h1 className="font-display text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent sm:text-6xl lg:text-7xl">
            Decentralized Hosting for the Future of Web
          </h1>
          
          <p className="mt-6 text-lg leading-7 text-gray-300 sm:text-xl">
            Experience end-to-end website and file deployment powered by <span className="font-semibold text-purple-400">IPFS</span> and <span className="font-semibold text-purple-400">Blockchain</span> technology. Built for Web3, we make decentralized hosting reliable, fast, and secure.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <a
              href="#"
              className="px-6 py-3 text-sm font-semibold text-white transition-all rounded-lg bg-purple-600 hover:bg-purple-500"
            >
              Launch Your Site
            </a>
            <a
              href="#"
              className="px-6 py-3 text-sm font-semibold transition-all border rounded-lg text-gray-300 border-gray-700 hover:border-gray-600 hover:text-white"
            >
              Learn More
            </a>
          </div>

          {/* Stats or features */}
          <div className="grid grid-cols-2 gap-8 mt-16 sm:grid-cols-3">
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-white sm:text-4xl">100%</span>
              <span className="text-sm text-gray-400 sm:text-base">Decentralized</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-white sm:text-4xl">IPFS</span>
              <span className="text-sm text-gray-400 sm:text-base">Powered Storage</span>
            </div>
            <div className="flex flex-col gap-1 sm:col-span-1 col-span-2">
              <span className="text-3xl font-bold text-white sm:text-4xl">Web3 Ready</span>
              <span className="text-sm text-gray-400 sm:text-base">Blockchain Hosting</span>
            </div>
          </div>
          <section
            data-section="about"
            className="flex flex-col items-start justify-center min-h-screen w-[90%] lg:w-[80%] mx-auto z-10"
          >
            <About />
          </section>

        </div>
      </div>
    </div>
  );
}
