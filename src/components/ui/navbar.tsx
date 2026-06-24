"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { ShoppingBag, Moon, Sun, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 90 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="w-8 h-8 rounded bg-primary text-primary-foreground flex items-center justify-center font-bold">
                P
              </div>
            </motion.div>
            <span className="font-bold text-lg hidden sm:inline-block">
              PremiumHub
            </span>
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="/store" className="transition-colors hover:text-foreground/80 text-foreground/60">Store</Link>
            <Link href="/dashboard" className="transition-colors hover:text-foreground/80 text-foreground/60">Dashboard</Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground h-9 w-9"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              <span className="sr-only">Toggle theme</span>
            </button>
          )}
          
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground h-9 w-9 relative">
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center font-bold">
              0
            </span>
            <span className="sr-only">Cart</span>
          </button>
          
          <button className="md:hidden inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9">
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
