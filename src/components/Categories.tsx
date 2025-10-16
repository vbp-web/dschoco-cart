import { categories } from "@/data/products";
import { Card, CardContent } from "./ui/card";
import { Sparkles, Cookie, Star, Gift, Diamond, Gem, Heart } from "lucide-react";

const categoryIcons = {
  "Kunafa Special": Sparkles,
  "Classic Chocolate Bars": Cookie,
  "Signature Blends": Star,
  "Inspired Bars": Gift,
  "Premium Chocolate": Diamond,
  "Special Bar": Gem,
  "Filling Chocolates": Heart,
};

interface CategoriesProps {
  onCategorySelect: (category: string | null) => void;
}

const Categories = ({ onCategorySelect }: CategoriesProps) => {
  const handleCategoryClick = (category: string) => {
    onCategorySelect(category);
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Explore Our Collection
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons];
            return (
              <Card
                key={category}
                className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-md)] bg-card animate-fade-in border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleCategoryClick(category)}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm md:text-base text-card-foreground group-hover:text-accent transition-colors">
                    {category}
                  </h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
