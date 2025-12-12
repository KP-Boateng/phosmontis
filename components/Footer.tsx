import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-3">PhosMontis Technologies</h3>
            <p className="text-yellow-400 italic mb-2">
              &quot;Light on the Mountain&quot;
            </p>
            <p className="text-gray-300">
              Matthew 5:14 - Shining excellence in technology
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-3">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@phosmontis.com"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  info@phosmontis.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  +233598045846
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} PhosMontis Technologies. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
