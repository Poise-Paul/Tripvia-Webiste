export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Tripvia Website",
  description: "Switch to flight mode",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "How It works",
      href: "/docs",
    },
    {
      label: "FAQ",
      href: "/pricing",
    },
    {
      label: "Contact Us",
      href: "/blog",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/profile",
    },
    {
      label: "How It Works",
      href: "/dashboard",
    },
    {
      label: "FAQ",
      href: "/projects",
    },
    {
      label: "Contact Us",
      href: "/team",
    },
  ],
};
