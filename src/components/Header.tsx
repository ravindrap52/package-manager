import NavItems from "./NavItems";

type childProps = {
  handleOnClick: () => void;
};

export default function Header({ handleOnClick }: childProps) {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Package Manager</h1>

        {/* Hamburger Menu As Button (only visible for Small Screens) */}
        <div className="lg:hidden">
          <button
            onClick={() => handleOnClick()}
            className="focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        {/* Desktop Navigation */}
        <NavItems />
      </div>
    </header>
  );
}
