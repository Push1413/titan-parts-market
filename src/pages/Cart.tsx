
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import CartItem from "@/components/cart/CartItem";

const Cart = () => {
  // Sample cart items - in a real app this would come from your cart state management
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Raspberry Pi 4 Model B - 8GB RAM",
      price: 75.00,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=600",
      quantity: 1,
      maxQuantity: 10,
    },
    {
      id: "2",
      name: "Arduino Uno R3 Microcontroller Development Board",
      price: 23.95,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600",
      quantity: 2,
      maxQuantity: 15,
    },
    {
      id: "3",
      name: "ESP32 WiFi & Bluetooth Development Module",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=600",
      quantity: 3,
      maxQuantity: 20,
    },
  ]);

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 9.99;
  const tax = subtotal * 0.08; // 8% tax rate
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 md:py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="bg-card rounded-lg shadow-sm">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-4">
                      Cart Items ({cartItems.length})
                    </h2>
                    <div>
                      {cartItems.map((item) => (
                        <CartItem
                          key={item.id}
                          {...item}
                          onUpdateQuantity={updateQuantity}
                          onRemove={removeItem}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-2">
                    <Button className="w-full">Proceed to Checkout</Button>
                    <Button variant="outline" asChild className="w-full">
                      <Link to="/">Continue Shopping</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">
                Browse our products and add something to your cart.
              </p>
              <Button asChild>
                <Link to="/">Start Shopping</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
