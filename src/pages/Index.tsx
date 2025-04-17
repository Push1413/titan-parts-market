
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/home/HeroBanner";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import SellerCta from "@/components/home/SellerCta";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroBanner />
        <FeaturedCategories />
        <FeaturedProducts />
        <SellerCta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
