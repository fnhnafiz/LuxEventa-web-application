import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-orange-500 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: About / Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-2">
            <span className="text-white">Lux</span>Eventa
          </h2>
          <p className="text-sm">
            LuxEventa is your go-to platform for managing and attending awesome
            events. Organize, join, and explore with ease!
          </p>
        </div>

        {/* Center: Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:underline">
                Events
              </Link>
            </li>
            <li>
              <Link to="/add-event" className="hover:underline">
                Add Event
              </Link>
            </li>
            <li>
              <Link to="/my-event" className="hover:underline">
                My Event
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p>Email: support@luxeventa.com</p>
          <p>Phone: +880 1234 567 890</p>
          <p>Location: Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 text-center text-sm border-t border-orange-400 pt-4">
        &copy; {year} LuxEventa. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
