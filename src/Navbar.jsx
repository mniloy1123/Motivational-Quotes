import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p4">
        <ul className="flex justify-between">
          <li>
            <Link to="/" className="text-white hover:text-blue-300">Home</Link>
          </li>
          <li>
            <Link to="/input" className="text-white hover:text-blue-300">Upload</Link>
          </li>
        </ul>
    </nav>
  );
}
