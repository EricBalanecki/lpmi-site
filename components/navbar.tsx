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
import { AnimatePresence, motion } from "framer-motion"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logos/lpmi_logo.png"
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
                  SERVICES
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-4 w-[400px] bg-background rounded-xl shadow-xl">
                        <div className="grid grid-cols-1 gap-2">
                          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Project Management</div>
                          <Link href="/services/consulting" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">IT Project Delivery</div>
                          </Link>
                          <Link href="/services/training" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Technical Program Management</div>
                          </Link>
                          <Link href="/services/coaching" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Project Recovery & Turnaround</div>
                          </Link>
                          <Link href="/services/consulting" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Stakeholder & Vendor Coordination</div>
                          </Link>
                        </div>
                        <div className="border-t pt-3">
                          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Additional Services</div>
                          <Link href="/services/teams-voice" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Microsoft Teams Voice Solution Delivery</div>
                          </Link>
                          <Link href="/services/telecom-architecture" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Telecommunication Architecture and Delivery</div>
                          </Link>
                          <Link href="/services/call-centre" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Call Centre Architecture and Delivery</div>
                          </Link>
                          <Link href="/services/network-architecture" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Network Architecture and Delivery</div>
                          </Link>
                          <Link href="/services/health-authority" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">BC Health Authority Hospital Redevelopment</div>
                          </Link>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/client-stories" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-12 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-muted-foreground hover:bg-transparent focus:outline-none focus:bg-transparent focus:text-foreground disabled:pointer-events-none disabled:opacity-50 data-[active]:text-foreground data-[active]:bg-transparent data-[state=open]:text-foreground data-[state=open]:bg-transparent">
                        CLIENT STORIES
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-12 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-muted-foreground hover:bg-transparent focus:outline-none focus:bg-transparent focus:text-foreground disabled:pointer-events-none disabled:opacity-50 data-[active]:text-foreground data-[active]:bg-transparent data-[state=open]:text-foreground data-[state=open]:bg-transparent">
                        ABOUT
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-12 w-max items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/70 hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary data-[state=open]:bg-primary text-bold">
                        CONTACT
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
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-1 px-2 pb-3 pt-2">
                <Link
                  href="/"
                  className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:text-muted-foreground hover:bg-transparent focus:bg-transparent focus:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <div className="space-y-1">
                 <button
                   onClick={() => setIsServicesOpen(!isServicesOpen)}
                   className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-foreground hover:text-muted-foreground hover:bg-transparent focus:bg-transparent focus:text-foreground"
                 >
                   Services
                   <svg
                     className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                   >
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                   </svg>
                 </button>
                 {isServicesOpen && (
                   <div className="space-y-1 pl-4">
                     <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 px-3">Project Management</div>
                    <Link
                      href="/services/consulting"
                      className="block rounded-md px-6 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-transparent focus:bg-transparent focus:text-foreground"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      IT Project Delivery
                    </Link>
                    <Link
                      href="/services/training"
                      className="block rounded-md px-6 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-transparent focus:bg-transparent focus:text-foreground"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Technical Program Management
                    </Link>
                    <Link
                      href="/services/coaching"
                      className="block rounded-md px-6 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-transparent focus:bg-transparent focus:text-foreground"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Project Recovery & Turnaround
                    </Link>
                    <Link
                      href="/services/consulting"
                      className="block rounded-md px-6 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-transparent focus:bg-transparent focus:text-foreground"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Stakeholder & Vendor Coordination
                    </Link>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 px-3 mt-4">Additional Services</div>
                    <Link
                      href="/services/teams-voice"
                      className="block rounded-md px-6 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-transparent focus:bg-transparent focus:text-foreground"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Microsoft Teams Voice Solution Delivery
                    </Link>
                    <Link
                      href="/services/telecom-architecture"
                      className="block rounded-md px-6 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-transparent focus:bg-transparent focus:text-foreground"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Telecommunication Architecture and Delivery
                    </Link>
                    <Link
                      href="/services/call-centre"
                      className="block rounded-md px-6 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-transparent focus:bg-transparent focus:text-foreground"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Call Centre Architecture and Delivery
                    </Link>
                    <Link
                      href="/services/network-architecture"
                      className="block rounded-md px-6 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-transparent focus:bg-transparent focus:text-foreground"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Network Architecture and Delivery
                    </Link>
                    <Link
                      href="/services/health-authority"
                      className="block rounded-md px-6 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-transparent focus:bg-transparent focus:text-foreground"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      BC Health Authority Hospital Redevelopment
                    </Link>
                   </div>
                 )}
                </div>
                <Link
                  href="/client-stories"
                  className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:text-muted-foreground hover:bg-transparent focus:bg-transparent focus:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Client Stories
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
} 