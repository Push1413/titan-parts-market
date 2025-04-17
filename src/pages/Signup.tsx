
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SignupForm from "@/components/auth/SignupForm";

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Create an Account</h1>
          <SignupForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
