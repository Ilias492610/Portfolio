import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Over" },
  { href: "/blog", label: "Blog" }
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="brand">
          Ilias Hamdaoui
          <span>Stageportfolio</span>
        </Link>

        <nav className="nav" aria-label="Hoofdnavigatie">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav__link">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
