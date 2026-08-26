import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import UserDropdown from "./UserDropdown";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900 border-b border-gray-800">
      <div className="container header-wrapper flex items-center justify-between">
        <Link href="/">
          <Image 
            src="/assets/icons/logo.svg" 
            alt="StockGen logo" 
            width={140} 
            height={32} 
            className="h-8 w-auto cursor-pointer" 
          />
        </Link>
        
        <nav className="hidden sm:block">
          <NavItems />
        </nav>

        <UserDropdown />
      </div>
    </header>
  );
}