"use client"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

import { Menu } from "lucide-react"

export default function Header2() {
  return (
    <header>
      <nav className="px-4 lg:px-6 py-2.5  border-violet-400">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Logo"
              width={36}
              height={36}
            />
            <div className="text-left pt-2">
              <div className="text-white font-bold text-xl tracking-wider leading-tight">
                BLANCO Y NEGRO
              </div>
              <div className="text-white text-xs tracking-[0.3em] font-light mt-1">
                SASTRERÍA
              </div>
            </div>
          </a>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex md:items-center">
            <ul className="flex flex-row space-x-8 font-medium">
              <li>
                <a href="#" className="text-white bg-transparent">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-white bg-transparent">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="text-white bg-transparent">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* MENU MOBILE (Dropdown) */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-white bg-transparent">
                  <Menu size={24} />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="bg-transparent border-none shadow-none">
                <DropdownMenuItem className="text-white bg-transparent focus:bg-transparent">
                  <a href="#">Inicio</a>
                </DropdownMenuItem>

                <DropdownMenuItem className="text-white bg-transparent focus:bg-transparent">
                  <a href="#">Servicios</a>
                </DropdownMenuItem>

                <DropdownMenuItem className="text-white bg-transparent focus:bg-transparent">
                  <a href="#">Contacto</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

        </div>
      </nav>
    </header>
  )
}