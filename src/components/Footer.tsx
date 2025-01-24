// components/Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Ayothi Consultancy</h2>
          <p className="text-sm text-gray-3">
            Innovative consultancy solutions to achieve sustainable growth and
            success.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-gray-3">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:underline">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/innovation" className="hover:underline">
                Innovation
              </Link>
            </li>
            <li>
              <Link href="/office-labs" className="hover:underline">
                Office & Labs
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media & Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact & Follow Us</h3>
          <p className="text-sm mb-2">Email: info@ayothiconsultancy.com</p>
          <p className="text-sm mb-4">Phone: +91 98765 43210</p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.129 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.846c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.24.195 2.24.195v2.468h-1.262c-1.243 0-1.63.774-1.63 1.562v1.87h2.773l-.443 2.89h-2.33V22C18.343 21.129 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.936 4.936 0 002.165-2.723 9.864 9.864 0 01-3.127 1.196 4.924 4.924 0 00-8.389 4.482c-4.092-.195-7.719-2.165-10.148-5.144A4.822 4.822 0 00.964 7.292c0 1.708.87 3.215 2.188 4.099a4.904 4.904 0 01-2.23-.616v.062c0 2.385 1.696 4.374 3.946 4.828a4.928 4.928 0 01-2.224.085c.627 1.956 2.445 3.379 4.6 3.42A9.864 9.864 0 010 19.54a13.945 13.945 0 007.548 2.212c9.057 0 14.01-7.505 14.01-14.01 0-.213-.005-.426-.015-.637A10.012 10.012 0 0024 4.557z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M20.452 20.452h-3.61V15.52c0-1.177-.023-2.693-1.641-2.693-1.643 0-1.894 1.283-1.894 2.609v5.016h-3.61V9.955h3.467v1.438h.048c.483-.915 1.662-1.876 3.42-1.876 3.656 0 4.333 2.407 4.333 5.535v6.4zM5.337 8.507a2.1 2.1 0 01-2.1-2.1 2.1 2.1 0 012.1-2.1 2.1 2.1 0 012.1 2.1 2.1 2.1 0 01-2.1 2.1zm1.804 11.945H3.533V9.955h3.608v10.497zM22.225 0H1.771C.792 0 0 .792 0 1.771v20.454C0 23.208.792 24 1.771 24h20.454c.979 0 1.771-.792 1.771-1.771V1.771C24 .792 23.208 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-primary-dark text-center py-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Ayothi Consultancy. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
