import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "./ui/sheet";
import { Button } from "./ui/button";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  selectedOption?: string;
  image: string;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number, selectedOption?: string) => void;
  onRemoveItem: (productId: string, selectedOption?: string) => void;
}

const Cart = ({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartProps) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const getCartItemKey = (item: CartItem) => {
    return item.selectedOption ? `${item.productId}-${item.selectedOption}` : item.productId;
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col bg-background">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-foreground">
            <ShoppingBag className="w-5 h-5" />
            Shopping Cart ({items.length})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground text-lg">Your cart is empty</p>
              <p className="text-sm text-muted-foreground mt-2">
                Add some delicious chocolates!
              </p>
            </div>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-4 py-4">
                {items.map((item) => (
                  <div
                    key={getCartItemKey(item)}
                    className="flex gap-4 p-4 rounded-lg bg-card border border-border/50"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-card-foreground">{item.name}</h4>
                      {item.selectedOption && (
                        <p className="text-sm text-muted-foreground">{item.selectedOption}</p>
                      )}
                      <p className="text-accent font-bold mt-1">₹{item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-8 w-8 hover:bg-accent/10 hover:border-accent"
                          onClick={() =>
                            onUpdateQuantity(
                              item.productId,
                              Math.max(0, item.quantity - 1),
                              item.selectedOption
                            )
                          }
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="font-semibold w-8 text-center text-foreground">
                          {item.quantity}
                        </span>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-8 w-8 hover:bg-accent/10 hover:border-accent"
                          onClick={() =>
                            onUpdateQuantity(
                              item.productId,
                              item.quantity + 1,
                              item.selectedOption
                            )
                          }
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 text-destructive hover:bg-destructive/10"
                      onClick={() => onRemoveItem(item.productId, item.selectedOption)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <SheetFooter className="flex-col gap-4">
              <div className="flex justify-between items-center text-lg font-bold border-t pt-4">
                <span className="text-foreground">Total:</span>
                <span className="text-accent">₹{total.toFixed(2)}</span>
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-lg shadow-md hover:shadow-[var(--shadow-gold)] transition-all">
                Proceed to Checkout
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
