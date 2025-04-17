
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, ShoppingCart, User, Heart, Menu, X 
} from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b">
      <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">TitanSquad</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center w-1/2 max-w-lg mx-4">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search for electronics parts..." 
              className="w-full pl-8 pr-4" 
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Link to="/wishlist">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary rounded-full w-4 h-4 text-[10px] flex items-center justify-center text-primary-foreground">3</span>
              </Button>
            </Link>
            <Link to="/account">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Button variant="default" asChild>
              <Link to="/login">Login</Link>
            </Button>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t p-4">
          <div className="flex items-center mb-4">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search for electronics parts..." 
                className="w-full pl-8 pr-4" 
              />
            </div>
          </div>
          
          <nav className="flex flex-col gap-2">
            <Link to="/" className="px-2 py-1 hover:bg-accent rounded-md">Home</Link>
            <Link to="/categories" className="px-2 py-1 hover:bg-accent rounded-md">Categories</Link>
            <Link to="/wishlist" className="px-2 py-1 hover:bg-accent rounded-md">Wishlist</Link>
            <Link to="/cart" className="px-2 py-1 hover:bg-accent rounded-md">Cart</Link>
            <Link to="/account" className="px-2 py-1 hover:bg-accent rounded-md">Account</Link>
            <Link to="/login" className="mt-2">
              <Button className="w-full" variant="default">Login</Button>
            </Link>
            <Link to="/signup" className="mt-2">
              <Button className="w-full" variant="outline">Sign Up</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
