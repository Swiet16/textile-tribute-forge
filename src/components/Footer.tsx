import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const footerLinks = {
    Shop: ["New Arrivals", "Women", "Men", "Accessories", "Sale"],
    "Customer Service": ["Contact Us", "Shipping Info", "Returns", "Size Guide", "FAQ"],
    Company: ["About Us", "Careers", "Store Locator", "Sustainability", "Press"],
  };

  return (
    <footer className="bg-foreground text-background border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4">AZURA</h3>
            <p className="text-background/80 mb-6 max-w-sm">
              Discover timeless elegance with our curated collections of contemporary fashion.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="outline" className="border-background/20 bg-transparent text-background hover:bg-background/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-background/20 bg-transparent text-background hover:bg-background/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-background/20 bg-transparent text-background hover:bg-background/10">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-background/80 hover:text-background transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-background/10 pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="font-semibold mb-2">Subscribe to our newsletter</h4>
            <p className="text-background/80 text-sm mb-4">
              Get exclusive offers and updates on new arrivals
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/80">
          <p>© 2024 Azura Fashion. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
