import { useState } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavItemsAsList from "@/components/NavItemsAsList";

export default function App() {
  const [toggle, setToggle] = useState(false);

  //function to toggle menu
  const handleOnClick = (): void => {
    setToggle(true);
  };
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header handleOnClick={handleOnClick} />
      {/* Mobile menu */}
      {toggle ? (
        <nav
          id="mobile-menu"
          className="fixed inset-0 z-50 bg-blue-600 text-white transform -translate-x-0 transition-transform duration-300 lg:hidden"
        >
          <div className="p-4">
            <button id="menu-close" className="focus:outline-none text-right" onClick={() => setToggle(false)}>
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <NavItemsAsList />
          </div>
        </nav>
      ) : null}
      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4 flex flex-col lg:flex-row gap-4">
        {/* Sidebar */}
        <aside className="bg-gray-100 p-4 rounded-lg lg:w-1/4">
          <h2 className="text-xl font-semibold mb-4">Sidebar</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-blue-600">
                Link 1
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600">
                Link 2
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600">
                Link 3
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600">
                Link 4
              </a>
            </li>
          </ul>
        </aside>

        {/* Content Area */}
        <section className="bg-white p-4 rounded-lg shadow-lg flex-grow">
          <h2 className="text-xl font-semibold mb-4">Main Content</h2>

          {/* Search Bar */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full lg:w-1/2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
            vestibulum leo. Cras ut dui ut erat dapibus mollis. Vestibulum
            scelerisque massa a felis pharetra, a elementum tortor luctus.
          </p>
          <p>
            Curabitur in feugiat augue. Nam lacinia suscipit lectus, non
            facilisis lacus ultricies ut. Quisque venenatis nisl eu augue
            tincidunt, vel porta odio vestibulum.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
