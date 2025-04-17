
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function SellerCta() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="rounded-xl bg-gradient-to-r from-primary/90 to-primary overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 md:p-12 space-y-4 text-white">
              <h2 className="text-2xl md:text-3xl font-bold">
                Start Selling on TitanSquad
              </h2>
              <p className="text-white/90">
                Join thousands of electronics vendors and hobbyists selling parts on our marketplace.
                Reach customers worldwide with our easy-to-use platform.
              </p>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Low commission fees
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Secure payment processing
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Tools to manage inventory
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Analytics dashboard
                </li>
              </ul>
              <div className="pt-4">
                <Button asChild className="bg-white text-primary hover:bg-white/90">
                  <Link to="/sell">Become a Seller</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-black/20"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200" 
                alt="Selling electronics components" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SellerCta;
