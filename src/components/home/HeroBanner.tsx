
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroBanner() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-primary/80 to-primary">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-white">
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
              Premium Electronics Parts Marketplace
            </h1>
            <p className="max-w-[600px] text-white/90">
              Buy and sell high-quality electronic components from verified sellers.
              From microcontrollers to display modules, find everything you need for your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                <Link to="/categories">Shop Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/sell">Start Selling</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="aspect-square relative overflow-hidden rounded-xl bg-black/5">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200" 
                alt="Electronics parts" 
                className="object-cover w-full h-full mix-blend-overlay opacity-70"
              />
              {/* Circuit board overlay pattern for visual interest */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQxLTguMDU5LTE4LTE4LTE4Uzw9IiAvPjwvZz48L3N2Zz4=')] opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
