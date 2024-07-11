import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold">
            <Link to="/">MyLogo</Link>
          </div>
          <nav className="space-x-4">
            <Link to="/" className="hover:text-gray-400">Home</Link>
            <Link to="/about" className="hover:text-gray-400">About</Link>
            <Link to="/contact" className="hover:text-gray-400">Contact</Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-lg">We are glad to have you here.</p>
        </div>
      </main>
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© 2023 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;