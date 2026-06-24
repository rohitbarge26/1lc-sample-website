export function Footer() {
  return (
    <footer className="border-t py-12 md:py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="font-bold text-lg">PremiumHub</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A high-end, sophisticated Next.js web application prototype featuring fluid micro-animations, a robust e-commerce engine, and a management dashboard.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-sm">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="/store" className="hover:text-foreground transition-colors">Store</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-sm">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-sm">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Cookie Settings</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} PremiumHub Prototype. All rights reserved.</p>
        <p className="mt-4 md:mt-0">Crafted with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
