
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AccountSettings from "@/components/account/AccountSettings";
import { ShoppingBag, Heart, User, Settings } from "lucide-react";

const Account = () => {
  // Mock user data
  const user = {
    name: "John Doe",
    email: "john@example.com",
    joinedDate: "January 2025",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 md:py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <aside className="md:w-64 -mx-4 md:mx-0">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {user.name.substring(0, 1)}
                  </div>
                  <div>
                    <h2 className="font-semibold">{user.name}</h2>
                    <p className="text-sm text-muted-foreground">Member since {user.joinedDate}</p>
                  </div>
                </div>

                <Tabs defaultValue="orders" orientation="vertical" className="w-full">
                  <TabsList className="flex flex-col h-auto w-full bg-transparent gap-1">
                    <TabsTrigger 
                      value="orders" 
                      className="w-full justify-start py-2 px-3 gap-2 data-[state=active]:bg-muted"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      <span>Orders</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="wishlist" 
                      className="w-full justify-start py-2 px-3 gap-2 data-[state=active]:bg-muted"
                    >
                      <Heart className="h-4 w-4" />
                      <span>Wishlist</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="profile" 
                      className="w-full justify-start py-2 px-3 gap-2 data-[state=active]:bg-muted"
                    >
                      <User className="h-4 w-4" />
                      <span>Profile</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="settings" 
                      className="w-full justify-start py-2 px-3 gap-2 data-[state=active]:bg-muted"
                    >
                      <Settings className="h-4 w-4" />
                      <span>Settings</span>
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </aside>

            <div className="flex-1">
              <Tabs defaultValue="orders">
                <TabsContent value="orders" className="bg-card p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Your Orders</h2>
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">You haven't placed any orders yet.</p>
                  </div>
                </TabsContent>

                <TabsContent value="wishlist" className="bg-card p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Your Wishlist</h2>
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">Your wishlist is empty.</p>
                  </div>
                </TabsContent>

                <TabsContent value="profile" className="bg-card p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Your Profile</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Name</p>
                        <p className="font-medium">{user.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">{user.email}</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="settings">
                  <AccountSettings />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Account;
