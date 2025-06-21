import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-100 shadow flex gap-4">
      <Link to="/" className="text-blue-600 hover:underline">View Items</Link>
      <Link to="/add" className="text-blue-600 hover:underline">Add Item</Link>
    </nav>
  );
}