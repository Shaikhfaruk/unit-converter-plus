export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-600">
              Unit Converter Plus provides free, accurate conversion tools for
              everyday use. Perfect for students, professionals, and anyone
              needing quick unit conversions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#length" className="text-blue-600 hover:text-blue-800">
                  Length Converter
                </a>
              </li>
              <li>
                <a href="#weight" className="text-blue-600 hover:text-blue-800">
                  Weight Converter
                </a>
              </li>
              <li>
                <a
                  href="#temperature"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Temperature Converter
                </a>
              </li>
              <li>
                <a href="#volume" className="text-blue-600 hover:text-blue-800">
                  Volume Converter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-600">
              Have suggestions or feedback? Email us at:
              <a
                href="mailto:contact@example.com"
                className="text-blue-600 hover:text-blue-800 ml-1"
              >
                contact@example.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>
            © {new Date().getFullYear()} Unit Converter Plus. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
