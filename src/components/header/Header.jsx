import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

export default function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleAccountClick = () => {
    if (!user) {
      navigate("/login");
    }
    // Optionally, open a dropdown for account management
  };

  const handleSignOut = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#131921] text-white">
        <div className="flex items-center px-4 py-2 gap-4 max-w-[1500px] mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center mr-4">
            <img src="/amazon-logo.png" alt="Amazon" className="h-8 w-auto" />
          </Link>
          {/* Deliver to */}
          <div className="hidden md:flex items-center cursor-pointer mr-4 px-2 py-1 hover:outline hover:outline-1 hover:outline-[#fff]/40 rounded">
            <FaMapMarkerAlt className="text-lg mr-1" />
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-gray-300">Deliver to</span>
              <span className="text-sm font-bold text-white">India</span>
            </div>
          </div>
          {/* Search Bar */}
          <form
            className="flex flex-1 max-w-2xl mx-3"
            onSubmit={(e) => {
              e.preventDefault();
              // handle search
            }}
          >
            <input
              type="text"
              placeholder="Search Amazon.in"
              className="flex-1 px-4 py-2 rounded-l-full rounded-r-none bg-white text-black outline-none border-none shadow focus:ring-2 focus:ring-[#febd69] transition"
              style={{ minWidth: 0 }}
            />
            <button
              className="bg-[#febd69] px-5 py-2 rounded-r-full rounded-l-none hover:bg-[#f3a847] flex items-center justify-center shadow -ml-1"
              type="submit"
            >
              <FaSearch className="text-black text-lg" />
            </button>
          </form>
          {/* Account, Orders, Cart */}
          <div className="flex items-center gap-2 ml-4">
            {/* Account & Lists */}
            <div
              className="relative cursor-pointer px-2 py-1 rounded hover:bg-[#232f3e]/80 transition group"
              onClick={handleAccountClick}
            >
              <span className="block text-xs">
                {user
                  ? `Hello, ${user.name?.split(" ")[0] || user.email}`
                  : "Hello, Sign in"}
              </span>
              <span className="block font-bold">
                {user ? "Account" : "Account & Lists"}
              </span>
              {/* Show Sign Out on hover if logged in */}
              {user && (
                <div className="absolute left-0 top-full mt-2 bg-white text-black rounded shadow-lg py-2 px-4 z-20 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition">
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left text-sm hover:underline"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
            {/* Orders */}
            <div
              className="cursor-pointer px-2 py-1 rounded hover:bg-[#232f3e]/80 transition"
              onClick={() => navigate("/orders")}
            >
              <span className="block text-xs">Returns</span>
              <span className="block font-bold">& Orders</span>
            </div>
            {/* Cart */}
            <div
              className="relative flex items-center cursor-pointer px-2 py-1 rounded hover:bg-[#232f3e]/80 transition"
              onClick={() => navigate("/cart")}
            >
              <FaShoppingCart className="text-2xl" />
              <span className="absolute -top-2 left-5 bg-[#febd69] text-black text-xs font-bold rounded-full px-1">
                0
              </span>
              <span className="ml-2 font-bold hidden md:inline">Cart</span>
            </div>
          </div>
        </div>
      </div>
      {/* Sub-navigation */}
      <nav className="bg-[#232f3e] px-4 border-t border-[#232f3e] shadow-sm">
        <ul className="flex gap-2 text-sm font-semibold max-w-[1500px] mx-auto py-2">
          <li className="cursor-pointer px-2 py-1 rounded hover:bg-[#37475a]/60">
            All
          </li>
          <li className="cursor-pointer px-2 py-1 rounded hover:bg-[#37475a]/60">
            Best Sellers
          </li>
          <li className="cursor-pointer px-2 py-1 rounded hover:bg-[#37475a]/60">
            Mobiles
          </li>
          <li className="cursor-pointer px-2 py-1 rounded hover:bg-[#37475a]/60">
            Today's Deals
          </li>
          <li className="cursor-pointer px-2 py-1 rounded hover:bg-[#37475a]/60">
            Electronics
          </li>
          <li className="cursor-pointer px-2 py-1 rounded hover:bg-[#37475a]/60">
            Prime
          </li>
          <li className="cursor-pointer px-2 py-1 rounded hover:bg-[#37475a]/60">
            Fashion
          </li>
          <li className="cursor-pointer px-2 py-1 rounded hover:bg-[#37475a]/60">
            Amazon Pay
          </li>
          {/* Add more categories as needed */}
        </ul>
      </nav>
    </header>
  );
}
