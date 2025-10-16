import { Instagram, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
              D's Choco Bliss
            </h3>
            <p className="text-primary-foreground/80">
              Handcrafted artisanal chocolates made with love and the finest ingredients.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:+919023974421"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 90239 74421
              </a>
              <a
                href="https://www.instagram.com/d_choco_bliss"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @D_CHOCO_BLISS
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2025 D's Choco Bliss. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
