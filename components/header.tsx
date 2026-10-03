import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import UserDropdown from "./UserDropdown";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto header-wrapper flex items-center justify-between">
        <Link href="/">
          <Image 
            alt="StockGen logo" 
            className="h-8 w-auto cursor-pointer" 
            height={32} 
            src="/assets/icons/logo.svg" 
            width={140}
          />
        </Link>
        
        <nav className="hidden sm:block">
          <NavItems/>
        </nav>

        <UserDropdown/>
      </div>
    </header>
  );
}