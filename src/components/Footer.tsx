import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-teal-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-heading text-lg font-semibold">
              Jeanne Gontier Neuropsychologue
            </p>
            <p className="text-white/70 text-sm mt-1">
              Cabinet de neuropsychologie et psychothérapie
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-white/80">
            <a
              href="tel:0656666314"
              className="hover:text-white transition-colors"
            >
              06 56 66 63 14
            </a>
            <span className="hidden sm:inline text-white/40">|</span>
            <a
              href="mailto:jeanne.neuropsy@gmail.com"
              className="hover:text-white transition-colors"
            >
              jeanne.neuropsy@gmail.com
            </a>
            <span className="hidden sm:inline text-white/40">|</span>
            <a
              href="https://www.linkedin.com/in/jeanne-gontier-neuropsy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
