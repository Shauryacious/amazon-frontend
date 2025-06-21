import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#232f3e] text-white mt-8">
      <div className="max-w-[1500px] mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-2">Get to Know Us</h3>
          <ul className="space-y-1 text-sm">
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Press Releases</li>
            <li className="hover:underline cursor-pointer">Amazon Science</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Connect with Us</h3>
          <ul className="space-y-1 text-sm">
            <li className="hover:underline cursor-pointer">Facebook</li>
            <li className="hover:underline cursor-pointer">Twitter</li>
            <li className="hover:underline cursor-pointer">Instagram</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Make Money with Us</h3>
          <ul className="space-y-1 text-sm">
            <li className="hover:underline cursor-pointer">Sell on Amazon</li>
            <li className="hover:underline cursor-pointer">
              Become an Affiliate
            </li>
            <li className="hover:underline cursor-pointer">
              Advertise Your Products
            </li>
            <li className="hover:underline cursor-pointer">
              Amazon Pay on Merchants
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Let Us Help You</h3>
          <ul className="space-y-1 text-sm">
            <li className="hover:underline cursor-pointer">
              COVID-19 and Amazon
            </li>
            <li className="hover:underline cursor-pointer">Your Account</li>
            <li className="hover:underline cursor-pointer">Returns Centre</li>
            <li className="hover:underline cursor-pointer">Help</li>
          </ul>
        </div>
      </div>
      <div className="bg-[#131921] text-gray-400 text-xs py-4 text-center">
        © {new Date().getFullYear()} Amazon Clone. Built for learning purposes.
      </div>
    </footer>
  );
}
