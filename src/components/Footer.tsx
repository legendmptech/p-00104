// components/Footer.js
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-gray-900 text-gray-300 text-base sm:text-lg">
      <div className="w-full max-w-5xl">
        <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Ayothi Consultancy
            </h2>
            <p className="text-lg leading-relaxed">
              Empowering businesses with innovative consultancy solutions to
              achieve sustainable growth and success.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-gray-100">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-gray-100">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-gray-100">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-gray-100">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/innovation" className="hover:text-gray-100">
                  Innovation
                </Link>
              </li>
              <li>
                <Link href="/office-labs" className="hover:text-gray-100">
                  Office & Labs
                </Link>
              </li>
            </ul>
          </div>
          {/* Social Media & Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Contact & Follow Us
            </h3>
            <p className="flex items-center mb-3">
              <FaEnvelope className="mr-2" /> info@ayothiconsultancy.com
            </p>
            <p className="flex items-center mb-5">
              <FaPhone className="mr-2" /> +91 98765 43210
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500"
              >
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-700"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-800 text-center py-4">
        <p className=" text-gray-400">
          © {new Date().getFullYear()} Ayothi Consultancy. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
