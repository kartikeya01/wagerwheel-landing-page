import { NAV_LINKS } from "./ui/navLinks";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/button";
import "./navbar.css"; // Make sure your CSS file is properly imported
import { Separator } from "./ui/separator";

const Navbar = () => {
  return (
    <nav className="max-container padding-container relative z-30 py-5 flex items-center justify-between">
        <div className="logo-container" style={{ paddingLeft: '20px' }}> {/* Add left padding here */}
            <Link href="/">
                <Image src="/logo.png" alt="logo" width={74} height={29} />
            </Link>
        </div>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="flex items-center">
        <div className="lg:flexCenter hidden">
          <Button 
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
