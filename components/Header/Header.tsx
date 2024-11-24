"use client";
import * as React from "react";
import { Equal, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { name: "Quem Somos", href: "#quem-somos" },
  { name: "Serviços", href: "#servicos" },
  { name: "Benefícios", href: "#beneficios" },
  { name: "Diferencial", href: "#diferencial" },
  { name: "Depoimentos", href: "#depoimentos" },
  { name: "Trabalhe Conosco", href: "#trabalhe-conosco" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="py-6 md:py-8 px-6 md:px-16 bg-blue-700">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Logo" width={144} height={144} />
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex gap-6">
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink
                  href={item.href}
                  className="text-blue-200 hover:text-blue-50 transition-colors"
                >
                  {item.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon" onClick={handleToggle}>
              {isOpen ? <X className="h-4 w-4 text-blue-50" /> : <Equal className="h-4 w-4 text-blue-50" />}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="mt-4 mx-6">
            <nav className="flex flex-col">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="w-full px-4 py-3 text-lg text-blue-700 hover:bg-blue-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

