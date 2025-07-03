import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="p-4 text-center">
      <h1 className="text-5xl font-bold text-red-500 mb-4">404</h1>
      <p className="mb-4 text-gray-600">Oops! Page not found.</p>
      <Link
        to="/"
        className="text-blue-500 underline hover:text-blue-700"
      >
        Go back home
      </Link>
    </div>
  );
}

export default NotFound;
