import { Logo } from "@/components/ui/Logo";

const companyLinks = [
  { label: "About", href: "#mission" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "mailto:wavedrone@163.com" },
];

const productLinks = [
  { label: "Shark Series", href: "#products" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Applications", href: "#applications" },
];

const resourceLinks = [
  { label: "Impact", href: "#impact" },
  { label: "Mission", href: "#mission" },
  { label: "Documents", href: "#documents" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.05] bg-[#020711]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo variant="footer" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#9ca8b8]">
              Explore the Future of Blue.
              <br />
              Autonomous underwater robotics for a better ocean.
            </p>
            <a
              href="https://waveunderwater.com"
              className="mt-4 inline-block text-sm text-[#5eebff] transition-opacity hover:opacity-80"
            >
              waveunderwater.com
            </a>
            <a
              href="mailto:wavedrone@163.com"
              className="mt-2 inline-block text-sm text-[#9ca8b8] transition-colors hover:text-white"
            >
              wavedrone@163.com
            </a>
          </div>

          {/* Link columns */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#9ca8b8] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Product
            </h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#9ca8b8] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Resources
            </h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#9ca8b8] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.04] px-6 py-5 lg:px-8">
        <p className="mx-auto max-w-7xl text-center text-xs text-[#6b7a8d]">
          &copy; 2022 WAVE Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
