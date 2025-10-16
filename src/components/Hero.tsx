import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-chocolate.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(25, 15, 10, 0.7), rgba(25, 15, 10, 0.5)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container relative z-10 text-center animate-fade-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
          D's Choco Bliss
        </h1>
        <p className="text-xl md:text-3xl mb-8 text-secondary/90 font-light max-w-3xl mx-auto">
          One Bite & You'll Melt into Bliss!
        </p>
        <p className="text-lg md:text-xl mb-10 text-secondary/80 max-w-2xl mx-auto">
          Discover handcrafted artisanal chocolates made with love and the finest ingredients
        </p>
        <Button
          size="lg"
          onClick={scrollToProducts}
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-[var(--shadow-gold)] transition-all hover:scale-105"
        >
          Shop Now
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-secondary/60" />
      </div>
    </section>
  );
};

export default Hero;
