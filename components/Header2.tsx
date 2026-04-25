"use client"

import { useState } from "react"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import Link from "next/link"

export default function Header2() {
  const [open, setOpen] = useState(false)

  const handleClose = () => setOpen(false)

  return (
    <header>
      <nav className="px-6 lg:px-12 py-4 bg-black/70 backdrop-blur-md border-b border-white/10">
        <div className="flex justify-between items-center mx-auto max-w-7xl">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            
            <div className="text-left">
              <div className="text-white font-semibold text-lg tracking-[0.25em] leading-tight">
                BLANCO & NEGRO
              </div>
              <div className="text-white/60 text-[10px] tracking-[0.4em] font-light mt-1 text-center">
                SASTRERÍA
              </div>
            </div>
            <div className="w-15 h-15 rounded-full overflow-hidden shadow-md mr-3 shrink-0 shadow-violet-600">
              <Image
                src="/logi.png"
                alt="Logo"
                width={60}
                height={60}
                className="object-cover w-full h-full"
              />
            </div>
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-10 font-medium">
              <li>
                <Link
                  href="/"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* MENU MOBILE */}
          <div className="md:hidden">
            <DropdownMenu open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger asChild>
                <button className="text-white/80 hover:text-white transition-colors">
                  <Menu size={22} />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl mr-2 p-2">

                <DropdownMenuItem
                  asChild
                  onClick={handleClose}
                  className="text-white/80 focus:text-white focus:bg-transparent"
                >
                  <Link href="/">Inicio</Link>
                </DropdownMenuItem>

                <DropdownMenuItem
                  asChild
                  onClick={handleClose}
                  className="text-white/80 focus:text-white focus:bg-transparent"
                >
                  <Link href="/servicios">Servicios</Link>
                </DropdownMenuItem>

                <DropdownMenuItem
                  asChild
                  onClick={handleClose}
                  className="text-white/80 focus:text-white focus:bg-transparent"
                >
                  <Link href="/contacto">Contacto</Link>
                </DropdownMenuItem>

              </DropdownMenuContent>
            </DropdownMenu>
          </div>

        </div>
      </nav>
    </header>
  )
}