import { useState } from "react";
import { products, categories, Product } from "@/data/products";
import ProductCard from "./ProductCard";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { X } from "lucide-react";

interface ProductsSectionProps {
  selectedCategory: string | null;
  onAddToCart: (product: Product, selectedOption?: string) => void;
  onClearFilter: () => void;
}

const ProductsSection = ({
  selectedCategory,
  onAddToCart,
  onClearFilter,
}: ProductsSectionProps) => {
  const [activeFilter, setActiveFilter] = useState<string | null>(selectedCategory);

  const filteredProducts = activeFilter
    ? products.filter((p) => p.category === activeFilter)
    : products;

  const featuredProducts = products.filter((p) => p.popular);

  const handleFilterClick = (category: string | null) => {
    setActiveFilter(category);
    if (category === null) {
      onClearFilter();
    }
  };

  return (
    <section id="products" className="py-16 bg-background">
      <div className="container">
        {/* Featured Products Section */}
        {!activeFilter && (
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-3 text-foreground">
              Featured Products
            </h2>
            <p className="text-center text-muted-foreground mb-10">
              Our most loved chocolate creations
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          </div>
        )}

        {/* All Products Section */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-3 text-foreground">
            {activeFilter || "All Products"}
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Handcrafted with love, one chocolate at a time
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <Button
              variant={activeFilter === null ? "default" : "outline"}
              onClick={() => handleFilterClick(null)}
              className={
                activeFilter === null
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent/10 hover:text-accent hover:border-accent"
              }
            >
              All Products
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => handleFilterClick(category)}
                className={
                  activeFilter === category
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent/10 hover:text-accent hover:border-accent"
                }
              >
                {category}
                {activeFilter === category && (
                  <X className="ml-2 w-4 h-4" onClick={(e) => { e.stopPropagation(); handleFilterClick(null); }} />
                )}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No products found in this category
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
