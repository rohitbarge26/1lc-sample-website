"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Star, Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const PRODUCTS = [
  {
    id: "1",
    name: "Minimalist Desk Setup",
    price: "₹ 1,25,000",
    category: "Workspace",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
  },
  {
    id: "2",
    name: "Ergonomic Mesh Chair",
    price: "₹ 45,000",
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
  },
  {
    id: "3",
    name: "Ultra-Wide Curve Monitor",
    price: "₹ 85,000",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
  },
  {
    id: "4",
    name: "Mechanical Keyboard Pro",
    price: "₹ 18,500",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80",
    rating: 5.0,
  },
  {
    id: "5",
    name: "Wireless ANC Headphones",
    price: "₹ 32,000",
    category: "Audio",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
  },
  {
    id: "6",
    name: "Smart Desk Organizer",
    price: "₹ 8,000",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
  }
];

export default function StorePage() {
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});

  const handleAddToCart = (id: string) => {
    setAddedItems(prev => ({ ...prev, [id]: true }));
    // Simulate API call and revert back
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  return (
    <main className="flex-1 container mx-auto px-4 py-12">
      <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">Curated Collection</h1>
          <p className="text-muted-foreground text-lg">Premium gear for the modern professional.</p>
        </div>
        <div className="flex gap-4">
          <select className="bg-background border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option>All Categories</option>
            <option>Workspace</option>
            <option>Electronics</option>
          </select>
          <select className="bg-background border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative flex flex-col bg-card rounded-xl border border-border/50 overflow-hidden hover:border-primary/50 transition-colors"
          >
            <div className="relative aspect-square overflow-hidden bg-muted">
              <button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/50 backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background text-foreground">
                <Heart className="w-4 h-4" />
              </button>
              {/* Note: Using standard img instead of Next Image to avoid next.config.js domain setup for this prototype */}
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-xs text-muted-foreground font-medium mb-1 tracking-wider uppercase">
                    {product.category}
                  </p>
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                </div>
                <div className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                  <Star className="w-3 h-3 fill-primary" />
                  {product.rating}
                </div>
              </div>
              
              <div className="mt-auto pt-6 flex items-center justify-between">
                <p className="font-bold text-xl">{product.price}</p>
                
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className={`relative overflow-hidden flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    addedItems[product.id] 
                      ? 'bg-green-500 text-white' 
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
                >
                  <ShoppingCart className="w-4 h-4" />
                  {addedItems[product.id] ? 'Added!' : 'Add to Cart'}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
