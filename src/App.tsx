export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Responsive Header</h1>
        </div>
      </header>

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
      <footer className="bg-blue-600 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Responsive Layout. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}