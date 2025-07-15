import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background/80 backdrop-blur-md py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap gap-6 text-sm font-medium text-muted-foreground">
          <Link href="/">Home</Link>
          <Link href="/#services">Services</Link>
          <Link href="/past-work">Past Work</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="text-xs text-muted-foreground text-center md:text-right">
          &copy; {new Date().getFullYear()} Leading PM Institute. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 