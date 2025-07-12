"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logos/leading_pm_logo.png"
                alt="LPMI Logo"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <NavigationMenu>
                              <NavigationMenuList>
                  <NavigationMenuItem>
                  <NavigationMenuTrigger className="group inline-flex h-12 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-muted-foreground hover:bg-transparent focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-muted-foreground data-[state=open]:bg-transparent bg-transparent">
                  Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-4 w-[200px]">
                        <Link href="/services/consulting" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Consulting</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Strategic consulting services for your business
                          </p>
                        </Link>
                        <Link href="/services/training" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Training</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Professional development and training programs
                          </p>
                        </Link>
                        <Link href="/services/coaching" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Coaching</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            One-on-one coaching and mentorship
                          </p>
                        </Link>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/past-work" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-12 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-muted-foreground hover:bg-transparent focus:outline-none focus:bg-transparent focus:text-foreground disabled:pointer-events-none disabled:opacity-50 data-[active]:text-foreground data-[active]:bg-transparent data-[state=open]:text-foreground data-[state=open]:bg-transparent">
                        Past Work
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-12 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-muted-foreground hover:bg-transparent focus:outline-none focus:bg-transparent focus:text-foreground disabled:pointer-events-none disabled:opacity-50 data-[active]:text-foreground data-[active]:bg-transparent data-[state=open]:text-foreground data-[state=open]:bg-transparent">
                        About
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-12 w-max items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/70 hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary data-[state=open]:bg-primary">
                        Contact
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
          </div>



          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
                      <div className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                <Link
                  href="/"
                  className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:text-muted-foreground hover:bg-transparent focus:bg-transparent focus:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:text-muted-foreground hover:bg-transparent focus:bg-transparent focus:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/past-work"
                  className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:text-muted-foreground hover:bg-transparent focus:bg-transparent focus:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Past Work
                </Link>
                <Link
                  href="/about"
                  className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:text-muted-foreground hover:bg-transparent focus:bg-transparent focus:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block rounded-md px-3 py-2 text-base font-medium text-primary-foreground bg-primary hover:bg-primary/70 focus:bg-primary focus:text-primary-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
        )}
      </div>
    </nav>
  )
} 