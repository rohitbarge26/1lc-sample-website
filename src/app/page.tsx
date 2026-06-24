"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, LayoutDashboard, Lock } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="flex-1 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background SVG Animation Accent */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-[80vw] h-[80vh] text-primary">
          <motion.path
            d="M 10 90 Q 30 10 50 50 T 90 10"
            fill="transparent"
            strokeWidth="2"
            stroke="currentColor"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
          />
        </svg>
      </div>

      <div className="z-10 max-w-4xl w-full flex flex-col items-center text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
            Premium Prototype
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Sophisticated.<br />
            <span className="text-muted-foreground">Minimal.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the ₹1,00,000 tier custom web application prototype. 
            Featuring fluid micro-animations, a robust e-commerce engine, and a comprehensive management dashboard.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center"
        >
          <Link href="/store" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2 gap-2 group">
            <ShoppingCart className="w-4 h-4" />
            E-commerce Engine
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/dashboard" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 py-2 gap-2 group">
            <LayoutDashboard className="w-4 h-4" />
            View Dashboard
          </Link>
          <Link href="/login" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 py-2 gap-2 group">
            <Lock className="w-4 h-4" />
            Auth Portal
          </Link>
        </motion.div>

        {mounted && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-sm underline text-muted-foreground hover:text-foreground transition-colors"
          >
            Toggle {theme === "dark" ? "Light" : "Dark"} Mode
          </motion.button>
        )}
      </div>
    </main>
  );
}
