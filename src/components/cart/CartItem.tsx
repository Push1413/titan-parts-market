
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";

interface CartItemProps {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  maxQuantity: number;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export function CartItem({
  id,
  name,
  image,
  price,
  quantity,
  maxQuantity,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) {
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value) || 1;
    if (newQuantity >= 1 && newQuantity <= maxQuantity) {
      setItemQuantity(newQuantity);
      onUpdateQuantity(id, newQuantity);
    }
  };

  const handleDecreaseQuantity = () => {
    if (itemQuantity > 1) {
      const newQuantity = itemQuantity - 1;
      setItemQuantity(newQuantity);
      onUpdateQuantity(id, newQuantity);
    }
  };

  const handleIncreaseQuantity = () => {
    if (itemQuantity < maxQuantity) {
      const newQuantity = itemQuantity + 1;
      setItemQuantity(newQuantity);
      onUpdateQuantity(id, newQuantity);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row py-6 border-b">
      <div className="w-full sm:w-1/5 mb-4 sm:mb-0">
        <Link to={`/product/${id}`} className="block">
          <div className="aspect-square w-full max-w-[100px] overflow-hidden rounded-md">
            <img
              src={image}
              alt={name}
              className="object-cover w-full h-full"
            />
          </div>
        </Link>
      </div>
      
      <div className="flex flex-col sm:flex-row w-full sm:w-4/5">
        <div className="flex-1 mb-4 sm:mb-0">
          <Link to={`/product/${id}`} className="font-medium hover:underline">
            {name}
          </Link>
        </div>
        
        <div className="flex items-center sm:w-32 mb-4 sm:mb-0">
          <Button 
            variant="outline" 
            size="icon" 
            className="h-8 w-8" 
            onClick={handleDecreaseQuantity}
            disabled={itemQuantity <= 1}
          >
            -
          </Button>
          <Input
            type="number"
            value={itemQuantity}
            onChange={handleQuantityChange}
            min={1}
            max={maxQuantity}
            className="w-12 h-8 mx-1 text-center"
          />
          <Button 
            variant="outline" 
            size="icon" 
            className="h-8 w-8" 
            onClick={handleIncreaseQuantity}
            disabled={itemQuantity >= maxQuantity}
          >
            +
          </Button>
        </div>
        
        <div className="flex justify-between items-center sm:w-32">
          <span className="font-medium">${(price * itemQuantity).toFixed(2)}</span>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => onRemove(id)}
            className="text-muted-foreground hover:text-destructive h-8 w-8"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
