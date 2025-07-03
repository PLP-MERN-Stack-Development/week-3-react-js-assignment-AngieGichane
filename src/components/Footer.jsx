function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <p className="text-sm">&copy; 2025 MyApp. All rights reserved.</p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="hover:text-gray-400"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-gray-400"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
