
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Star } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
}

export function ProductCard({
  id,
  name,
  price,
  image,
  rating,
  reviewCount,
  inStock,
  isNew,
  isFeatured,
}: ProductCardProps) {
  return (
    <Card className="h-full overflow-hidden group border transition-all duration-200 hover:border-primary">
      <div className="relative">
        <Link to={`/product/${id}`}>
          <div className="aspect-square overflow-hidden">
            <img
              src={image}
              alt={name}
              className="object-cover w-full h-full transition-transform group-hover:scale-105"
            />
          </div>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full z-10"
        >
          <Heart className="h-4 w-4" />
        </Button>
        {isNew && (
          <Badge className="absolute top-2 left-2">New</Badge>
        )}
        {isFeatured && (
          <Badge className="absolute top-2 left-2" variant="secondary">Featured</Badge>
        )}
      </div>
      
      <CardContent className="p-4">
        <Link to={`/product/${id}`} className="block">
          <h3 className="font-medium text-base line-clamp-2 group-hover:text-primary">
            {name}
          </h3>
        </Link>
        
        <div className="flex items-center mt-2 text-sm">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < Math.floor(rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-muted-foreground">({reviewCount})</span>
        </div>
        
        <div className="mt-2">
          <span className="font-bold text-lg">${price.toFixed(2)}</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full gap-2"
          disabled={!inStock}
        >
          <ShoppingCart className="h-4 w-4" />
          {inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
