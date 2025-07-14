import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Table } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogin = () => {
    alert("Login functionality - for demo purposes only!");
  };

  const handleGetStarted = () => {
    alert("Get Started functionality - for demo purposes only!");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Table className="h-8 w-8 text-primary mr-2" />
              <span className="text-2xl font-bold text-gray-900">SheetSync</span>
            </div>
          </div>

          {/* Desktop navigation links */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("features")}
                className="nav-link text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("why-teams")}
                className="nav-link text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium"
              >
                Why Teams
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="nav-link text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="nav-link text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Desktop Sign In / Get Started */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={handleLogin}
              className="text-gray-700 hover:text-primary"
            >
              Sign In
            </Button>
            <Button
              onClick={handleGetStarted}
              className="btn-primary"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
            <button
              onClick={() => scrollToSection("features")}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary w-full text-left"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("why-teams")}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary w-full text-left"
            >
              Why Teams
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary w-full text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary w-full text-left"
            >
              Contact
            </button>

            {/* Mobile Sign In / Get Started */}
            <div className="pt-4 pb-3 border-t border-gray-200">
              <Button
                variant="ghost"
                onClick={handleLogin}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
              >
                Sign In
              </Button>
              <Button
                onClick={handleGetStarted}
                className="block w-full text-left px-3 py-2 text-base font-medium text-white bg-primary rounded-lg mt-2"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
