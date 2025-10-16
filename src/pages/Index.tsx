import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ProductsSection from "@/components/ProductsSection";
import Cart, { CartItem } from "@/components/Cart";
import Footer from "@/components/Footer";
import { Product } from "@/data/products";
import { toast } from "sonner";

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const addToCart = (product: Product, selectedOption?: string) => {
    const option = selectedOption
      ? product.options?.find((opt) => opt.size === selectedOption)
      : null;

    const price = option?.price || product.price || 0;
    const displayName = option ? `${product.name} - ${selectedOption}` : product.name;

    const cartKey = selectedOption ? `${product.id}-${selectedOption}` : product.id;
    const existingItemIndex = cartItems.findIndex(
      (item) =>
        item.productId === product.id &&
        (!selectedOption || item.selectedOption === selectedOption)
    );

    if (existingItemIndex >= 0) {
      const newItems = [...cartItems];
      newItems[existingItemIndex].quantity += 1;
      setCartItems(newItems);
      toast.success(`Added another ${displayName} to cart`);
    } else {
      const newItem: CartItem = {
        productId: product.id,
        name: product.name,
        price,
        quantity: 1,
        selectedOption,
        image: product.image,
      };
      setCartItems([...cartItems, newItem]);
      toast.success(`${displayName} added to cart`);
    }
  };

  const updateQuantity = (productId: string, quantity: number, selectedOption?: string) => {
    if (quantity === 0) {
      removeItem(productId, selectedOption);
      return;
    }

    const newItems = cartItems.map((item) => {
      if (
        item.productId === productId &&
        (!selectedOption || item.selectedOption === selectedOption)
      ) {
        return { ...item, quantity };
      }
      return item;
    });
    setCartItems(newItems);
  };

  const removeItem = (productId: string, selectedOption?: string) => {
    const newItems = cartItems.filter(
      (item) =>
        !(
          item.productId === productId &&
          (!selectedOption || item.selectedOption === selectedOption)
        )
    );
    setCartItems(newItems);
    toast.info("Item removed from cart");
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemCount={totalItems} onCartClick={() => setIsCartOpen(true)} />
      <main className="flex-1">
        <Hero />
        <Categories onCategorySelect={setSelectedCategory} />
        <ProductsSection
          selectedCategory={selectedCategory}
          onAddToCart={addToCart}
          onClearFilter={() => setSelectedCategory(null)}
        />
      </main>
      <Footer />
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
    </div>
  );
};

export default Index;
