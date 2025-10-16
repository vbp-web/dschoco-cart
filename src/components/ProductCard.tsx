import { Product } from "@/data/products";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Plus } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, selectedOption?: string) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const getPrice = () => {
    if (product.options && product.options.length > 0) {
      const minPrice = Math.min(...product.options.map((opt) => opt.price));
      return `From ₹${minPrice}`;
    }
    return `₹${product.price}`;
  };

  const handleAddToCart = () => {
    if (product.options && product.options.length > 1) {
      // For products with multiple options, we'll need to show a modal
      // For now, just add the first option
      onAddToCart(product, product.options[0].size);
    } else if (product.options && product.options.length === 1) {
      onAddToCart(product, product.options[0].size);
    } else {
      onAddToCart(product);
    }
  };

  return (
    <Card className="group h-full flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-[var(--shadow-md)] bg-card border-border/50">
      <CardHeader className="p-0">
        <div className="relative aspect-square overflow-hidden rounded-t-lg bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {product.popular && (
            <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground shadow-md">
              Popular
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-4">
        <h3 className="font-semibold text-lg mb-2 text-card-foreground group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>
        <p className="text-xl font-bold text-accent">{getPrice()}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:shadow-md transition-all"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
