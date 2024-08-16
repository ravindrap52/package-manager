export default function NavItems() {
  return (
    <nav className="hidden lg:flex space-x-6" data-testid="navItems">
      <a href="#" className="hover:text-gray-300">
        Home
      </a>
      <a href="#" className="hover:text-gray-300">
        About
      </a>
      <a href="#" className="hover:text-gray-300">
        Services
      </a>
      <a href="#" className="hover:text-gray-300">
        Contact Us
      </a>
    </nav>
  );
}
