
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, StarIcon, Share2, Shield, RefreshCw, TruckIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import ProductReviews from "./ProductReviews";
import ProductQuestions from "./ProductQuestions";

interface ProductDetailsProps {
  product: {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    images: string[];
    rating: number;
    reviewCount: number;
    description: string;
    specifications: Record<string, string>;
    inStock: boolean;
    stockQuantity: number;
    seller: {
      id: string;
      name: string;
      rating: number;
    };
  };
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    if (quantity < product.stockQuantity) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-xl border">
            <img
              src={product.images[activeImageIndex]}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex space-x-2 overflow-auto pb-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`relative w-20 h-20 rounded-md overflow-hidden border-2 ${
                  activeImageIndex === index ? "border-primary" : "border-transparent"
                }`}
              >
                <img
                  src={image}
                  alt={`Product view ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-muted-foreground">
                ({product.reviewCount} reviews)
              </span>
              <span className="mx-2 text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">
                Sold by <a href="#" className="text-primary hover:underline">{product.seller.name}</a>
              </span>
            </div>
          </div>

          <div className="flex items-baseline">
            <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="ml-2 text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
            {product.originalPrice && (
              <Badge className="ml-2 bg-green-600">
                Save ${(product.originalPrice - product.price).toFixed(2)}
              </Badge>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-24 font-medium">Availability:</div>
              {product.inStock ? (
                <Badge variant="outline" className="bg-green-50 border-green-200 text-green-700">
                  In Stock ({product.stockQuantity} available)
                </Badge>
              ) : (
                <Badge variant="outline" className="bg-red-50 border-red-200 text-red-700">
                  Out of Stock
                </Badge>
              )}
            </div>
            
            <div className="flex items-center">
              <div className="w-24 font-medium">Quantity:</div>
              <div className="flex items-center">
                <Button 
                  variant="outline" 
                  size="icon"
                  disabled={quantity <= 1}
                  onClick={handleDecreaseQuantity}
                >
                  -
                </Button>
                <Input
                  type="number"
                  min="1"
                  max={product.stockQuantity}
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-16 mx-1 text-center"
                />
                <Button 
                  variant="outline" 
                  size="icon"
                  disabled={quantity >= product.stockQuantity || !product.inStock}
                  onClick={handleIncreaseQuantity}
                >
                  +
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="flex-1 gap-2"
              disabled={!product.inStock}
            >
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="bg-accent border-none shadow-none">
              <CardContent className="p-4 flex items-center gap-3">
                <TruckIcon className="h-5 w-5 text-muted-foreground" />
                <div className="text-sm">Free shipping on orders over $50</div>
              </CardContent>
            </Card>
            <Card className="bg-accent border-none shadow-none">
              <CardContent className="p-4 flex items-center gap-3">
                <RefreshCw className="h-5 w-5 text-muted-foreground" />
                <div className="text-sm">30-day return policy</div>
              </CardContent>
            </Card>
            <Card className="bg-accent border-none shadow-none">
              <CardContent className="p-4 flex items-center gap-3">
                <Shield className="h-5 w-5 text-muted-foreground" />
                <div className="text-sm">1-year warranty</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Tabs defaultValue="description" className="mt-8">
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews & Q&A</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="py-4">
          <div className="prose max-w-none">
            <p>{product.description}</p>
          </div>
        </TabsContent>
        <TabsContent value="specifications" className="py-4">
          <div className="border rounded-md">
            {Object.entries(product.specifications).map(([key, value], index) => (
              <div 
                key={key} 
                className={`flex py-2 px-4 ${
                  index % 2 === 0 ? 'bg-muted' : ''
                }`}
              >
                <span className="w-1/3 font-medium">{key}</span>
                <span className="w-2/3">{value}</span>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="py-4">
          <div className="space-y-8">
            <ProductReviews productId={product.id} />
            <ProductQuestions productId={product.id} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default ProductDetails;
