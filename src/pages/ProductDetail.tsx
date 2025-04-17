
import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductDetails from "@/components/product/ProductDetails";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  // This is mock data - in a real application, you would fetch this from an API
  const product = {
    id: id || "1",
    name: "Raspberry Pi 4 Model B - 8GB RAM",
    price: 75.00,
    originalPrice: 89.99,
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=600",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=600",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=600"
    ],
    rating: 4.8,
    reviewCount: 245,
    description: "The Raspberry Pi 4 Model B is the latest product in the popular Raspberry Pi range of computers. It offers ground-breaking increases in processor speed, multimedia performance, memory, and connectivity compared to the prior-generation Raspberry Pi 3 Model B+, while retaining backwards compatibility and similar power consumption. For the end user, Raspberry Pi 4 Model B provides desktop performance comparable to entry-level x86 PC systems.\n\nThis version comes with 8GB of RAM and is perfect for more demanding applications, development work, and lightweight desktop use.",
    specifications: {
      "Processor": "Broadcom BCM2711, Quad core Cortex-A72 (ARM v8) 64-bit SoC @ 1.5GHz",
      "Memory": "8GB LPDDR4-3200 SDRAM",
      "Connectivity": "2.4 GHz and 5.0 GHz IEEE 802.11ac wireless, Bluetooth 5.0, BLE",
      "GPIO": "Standard 40 pin GPIO header",
      "Video": "2 × micro-HDMI ports (up to 4kp60 supported)",
      "Audio": "4-pole stereo audio and composite video port",
      "USB Ports": "2 USB 3.0 ports; 2 USB 2.0 ports",
      "Ethernet": "Gigabit Ethernet",
      "Power": "5V DC via USB-C connector (minimum 3A)",
      "Operating Temperature": "0 – 50 degrees C ambient",
      "Dimensions": "85 x 56 x 17mm"
    },
    inStock: true,
    stockQuantity: 42,
    seller: {
      id: "s1",
      name: "TechStore",
      rating: 4.9
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ProductDetails product={product} />
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
