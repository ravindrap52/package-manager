export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-600 text-white p-4">
      <div className="container mx-auto text-center">
        <span data-testid="currentYear">{currentYear} &#169;</span>
        <span className="text-primary">All rights reserved</span>
      </div>
    </footer>
  );
}
