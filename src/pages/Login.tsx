
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Login to Your Account</h1>
          <LoginForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
