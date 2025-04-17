
import { Link } from "react-router-dom";
import { 
  Cpu, 
  CircuitBoard, 
  Smartphone, 
  PlugZap, 
  Monitor, 
  Printer, 
  HardDrive, 
  WifiIcon 
} from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  {
    name: "Processors",
    icon: Cpu,
    color: "bg-blue-100 text-blue-700",
    href: "/categories/processors"
  },
  {
    name: "Memory & Storage",
    icon: HardDrive,
    color: "bg-green-100 text-green-700",
    href: "/categories/memory-storage"
  },
  {
    name: "Circuit Boards",
    icon: CircuitBoard,
    color: "bg-purple-100 text-purple-700",
    href: "/categories/circuit-boards"
  },
  {
    name: "Displays & LCDs",
    icon: Monitor,
    color: "bg-amber-100 text-amber-700",
    href: "/categories/displays"
  },
  {
    name: "Power Supplies",
    icon: PlugZap,
    color: "bg-red-100 text-red-700",
    href: "/categories/power-supplies"
  },
  {
    name: "Networking",
    icon: WifiIcon,
    color: "bg-teal-100 text-teal-700",
    href: "/categories/networking"
  },
  {
    name: "IoT Devices",
    icon: Smartphone,
    color: "bg-indigo-100 text-indigo-700",
    href: "/categories/iot-devices"
  },
  {
    name: "Peripherals",
    icon: Printer,
    color: "bg-orange-100 text-orange-700",
    href: "/categories/peripherals"
  },
];

export function FeaturedCategories() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Browse Categories
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Explore our wide range of electronic components and parts
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
          {categories.map((category) => (
            <Link 
              key={category.name} 
              to={category.href}
              className="group flex flex-col items-center p-4 rounded-lg border bg-card hover:border-primary transition-all duration-200"
            >
              <div className={cn("p-3 rounded-full", category.color)}>
                <category.icon className="w-6 h-6" />
              </div>
              <span className="mt-3 font-medium group-hover:text-primary">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCategories;
