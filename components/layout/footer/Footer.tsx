// @/components/ui/StickyFooter.jsx
import React, { memo, useMemo } from "react";

// Type definitions
interface StickyFooterProps {
  height?: number;
  children?: React.ReactNode;
  className?: string;
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

// Optimized footer link component
const FooterLink = memo<FooterLinkProps>(
  ({ href, children, external = false }) => (
    <a
      href={href}
      className='hover:text-white/80 cursor-pointer transition-colors duration-300 focus:outline-none  rounded-sm'
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  )
);

FooterLink.displayName = "FooterLink";

// Footer section component for better organization
const FooterSection = memo<{ title: string; children: React.ReactNode }>(
  ({ title, children }) => (
    <div className='flex flex-col gap-2'>
      <h3 className='mb-2 uppercase text-white font-semibold text-sm tracking-wider'>
        {title}
      </h3>
      {children}
    </div>
  )
);

FooterSection.displayName = "FooterSection";

// Main Sticky Footer Component
const Footer: React.FC<StickyFooterProps> = memo(
  ({ height = 800, children, className = "" }) => {
    // Memoize inline styles to prevent unnecessary re-renders
    const containerStyle = useMemo(
      () => ({
        height: `${height}px`,
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }),
      [height]
    );

    const footerStyle = useMemo(
      () => ({
        height: `${height}px`,
      }),
      [height]
    );

    return (
      <div className={`relative ${className}`} style={containerStyle}>
        <div className='fixed bottom-0 w-full z-10' style={footerStyle}>
          {children || <DefaultFooterContent />}
        </div>
      </div>
    );
  }
);

Footer.displayName = "Footer";

// Optimized default footer content
const DefaultFooterContent = memo(() => {
  // Footer navigation data - easier to maintain
  const navigationSections = useMemo(
    () => [
      {
        title: "Properties",
        links: [
          { href: "/", text: "Home" },
          { href: "/", text: "All Properties" },
          { href: "/", text: "Garden Homes" },
          { href: "/", text: "Luxury Estates" },
        ],
      },
      {
        title: "Services",
        links: [
          { href: "/", text: "Buying" },
          { href: "/", text: "Selling" },
          { href: "/", text: "Consultation" },
          { href: "/", text: "Management" },
        ],
      },
      {
        title: "About",
        links: [
          { href: "/", text: "About Us" },
          { href: "/", text: "Our Agents" },
          { href: "/", text: "Testimonials" },
          { href: "/", text: "Contact" },
        ],
      },
    ],
    []
  );

  return (
    <footer className='font-manrope bg-gradient-to-t from-emerald-950 to-black py-8 px-6 sm:px-12 h-full w-full flex flex-col justify-between text-white'>
      {/* Navigation Links */}
      <nav
        className='flex flex-wrap gap-8 sm:gap-12 md:gap-20'
        role='navigation'
        aria-label='Footer navigation'
      >
        {navigationSections.map((section) => (
          <FooterSection key={section.title} title={section.title}>
            {section.links.map((link) => (
              <FooterLink key={link.text} href={link.href}>
                {link.text}
              </FooterLink>
            ))}
          </FooterSection>
        ))}
      </nav>

      {/* Brand Section */}
      <div className='mt-8'>
        <h1
          style={{
            fontSize: "clamp(9vh, 20vw, 32vh)",
            lineHeight: "clamp(45px, 5.5vw, 120px)",
            marginBottom:"clamp(50px, 10rem, 130px)",
          }}
          className=' tracking-tighter font-bold leading-none whitespace-nowrap select-none'
          aria-label='Green Space - Company Name'
        >
          Green Space
        </h1>
        <p className='text-white text-[2.5vh]'>
          Your trusted garden home specialists
        </p>
      </div>
    </footer>
  );
});

DefaultFooterContent.displayName = "DefaultFooterContent";

export default Footer;

export { FooterLink, FooterSection };
