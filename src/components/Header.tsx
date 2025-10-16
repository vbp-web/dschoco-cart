import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

const Header = ({ cartItemCount, onCartClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            D's Choco Bliss
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-sm font-medium transition-colors hover:text-accent">
            Home
          </a>
          <a href="#products" className="text-sm font-medium transition-colors hover:text-accent">
            Products
          </a>
          <a href="#contact" className="text-sm font-medium transition-colors hover:text-accent">
            Contact
          </a>
        </nav>

        <Button
          variant="outline"
          size="icon"
          className="relative hover:bg-accent/10 hover:border-accent transition-all"
          onClick={onCartClick}
        >
          <ShoppingCart className="h-5 w-5" />
          {cartItemCount > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-accent text-accent-foreground">
              {cartItemCount}
            </Badge>
          )}
        </Button>
      </div>
    </header>
  );
};

export default Header;
