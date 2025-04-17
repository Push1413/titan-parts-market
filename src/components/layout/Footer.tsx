
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">TitanSquad</h3>
            <p className="text-sm text-muted-foreground">
              Your marketplace for premium electronics parts and components.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/categories" className="text-sm text-muted-foreground hover:text-foreground">Categories</Link></li>
              <li><Link to="/deals" className="text-sm text-muted-foreground hover:text-foreground">Deals</Link></li>
              <li><Link to="/new-arrivals" className="text-sm text-muted-foreground hover:text-foreground">New Arrivals</Link></li>
              <li><Link to="/best-sellers" className="text-sm text-muted-foreground hover:text-foreground">Best Sellers</Link></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Account</h3>
            <ul className="space-y-2">
              <li><Link to="/account" className="text-sm text-muted-foreground hover:text-foreground">My Account</Link></li>
              <li><Link to="/orders" className="text-sm text-muted-foreground hover:text-foreground">Orders</Link></li>
              <li><Link to="/wishlist" className="text-sm text-muted-foreground hover:text-foreground">Wishlist</Link></li>
              <li><Link to="/sell" className="text-sm text-muted-foreground hover:text-foreground">Sell on TitanSquad</Link></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Help</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground">FAQ</Link></li>
              <li><Link to="/shipping" className="text-sm text-muted-foreground hover:text-foreground">Shipping</Link></li>
              <li><Link to="/returns" className="text-sm text-muted-foreground hover:text-foreground">Returns</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t">
          <p className="text-sm text-center text-muted-foreground">
            © 2025 TitanSquad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
