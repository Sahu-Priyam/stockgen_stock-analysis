"use client";

import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NavItems from "./NavItems";

export default function UserDropdown() {
  const router = useRouter();
  
  // Dummy user data used in the video before authentication is built
  const user = { name: "Priyam", email: "contact@gmail.com" };

  const handleSignOut = async () => {
    router.push("/sign-in");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-3 text-gray-400 hover:text-yellow-500">
          <Avatar className="h-8 w-8">
            <AvatarImage src="" alt={user.name} />
            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:flex flex-col items-start">
            <span className="text-base font-medium text-gray-400">{user.name}</span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" className="w-56 bg-gray-800 border-gray-700 text-gray-300">
        <DropdownMenuLabel>
          <div className="flex flex-col">
            <span className="text-base font-medium text-gray-400">{user.name}</span>
            <span className="text-sm text-gray-500">{user.email}</span>
          </div>
        </DropdownMenuLabel>
        
        {/* Mobile Navigation wrapper */}
        <div className="sm:hidden">
          <DropdownMenuSeparator className="bg-gray-600" />
          <div className="p-2">
            <NavItems />
          </div>
        </div>

        <DropdownMenuSeparator className="bg-gray-600" />
        <DropdownMenuItem onClick={handleSignOut} className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer">
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}