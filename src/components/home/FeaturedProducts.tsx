
import { ProductCard } from "./ProductCard";

const products = [
  {
    id: "1",
    name: "Raspberry Pi 4 Model B - 8GB RAM",
    price: 75.00,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=600",
    rating: 4.8,
    reviewCount: 245,
    inStock: true,
    isFeatured: true,
  },
  {
    id: "2",
    name: "Arduino Uno R3 Microcontroller Development Board",
    price: 23.95,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600",
    rating: 4.9,
    reviewCount: 412,
    inStock: true,
    isNew: true,
  },
  {
    id: "3",
    name: "ESP32 WiFi & Bluetooth Development Module",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=600",
    rating: 4.7,
    reviewCount: 178,
    inStock: true,
  },
  {
    id: "4",
    name: "7-inch Touchscreen LCD Display for Raspberry Pi",
    price: 64.95,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=600",
    rating: 4.5,
    reviewCount: 89,
    inStock: false,
  },
  {
    id: "5",
    name: "Seeed Studio Wio Terminal - ATSAMD51",
    price: 29.90,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=600",
    rating: 4.6,
    reviewCount: 56,
    inStock: true,
    isNew: true,
  },
  {
    id: "6",
    name: "Adafruit NeoPixel LED Strip - 1m (60 LEDs)",
    price: 24.95,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600",
    rating: 4.9,
    reviewCount: 203,
    inStock: true,
  },
  {
    id: "7",
    name: "NVIDIA Jetson Nano Developer Kit",
    price: 99.00,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=600",
    rating: 4.7,
    reviewCount: 112,
    inStock: true,
    isFeatured: true,
  },
  {
    id: "8",
    name: "SparkFun Qwiic Pro Micro - USB-C (ATmega32U4)",
    price: 21.50,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=600",
    rating: 4.4,
    reviewCount: 47,
    inStock: true,
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-12 bg-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Featured Products
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Discover our most popular electronics components and parts
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
