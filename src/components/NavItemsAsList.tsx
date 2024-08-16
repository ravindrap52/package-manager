export default function NavItemsAsList() {
    return (
        <ul className="mt-8 space-y-6" data-testid="navItemsAsList">
        <li><a href="#" className="block text-lg hover:text-gray-300">Home</a></li>
        <li><a href="#" className="block text-lg hover:text-gray-300">About</a></li>
        <li><a href="#" className="block text-lg hover:text-gray-300">Services</a></li>
        <li><a href="#" className="block text-lg hover:text-gray-300">Contact Us</a></li>
    </ul>
    );
  }