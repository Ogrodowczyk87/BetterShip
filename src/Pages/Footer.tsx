// Import React library
import React from "react";

// Define an array of company-related links
export const CompanyLinks = [
  { id: 1, title: "Company" },
  { id: 2, title: "About Us" },
  { id: 3, title: "Service" },
  { id: 4, title: "Contact" },
];

// Define an array of service-related links
export const ServicesLinks = [
  { id: 1, title: "Web Development" },
  { id: 2, title: "App Development" },
  { id: 3, title: "SEO" },
  { id: 4, title: "Digital Marketing" },
];

// Define an array of resources-related links
export const ResourcesLinks = [
  { id: 1, title: "Blog" },
  { id: 2, title: "Case Studies" },
  { id: 3, title: "Guides" },
  { id: 4, title: "Webinars" },
];

// Define an array of support-related links
export const SupportLinks = [
  { id: 1, title: "Help Center" },
  { id: 2, title: "Community" },
  { id: 3, title: "Contact Support" },
  { id: 4, title: "Status" },
];

// Define the Footer component
export default function Footer() {
  return (
    // Footer section with background and text styling
    <footer className="bg-black text-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <div>
          {/* Company links section */}
          <h3 className="text-xl font-bold mb-4 text-white">Company</h3>
          <ul>
            {CompanyLinks.map((link) => (
              <li key={link.id}>
                <a href="#" className="text-gray-400 hover:text-white">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {/* Services links section */}
          <h3 className="text-xl font-bold mb-4 text-white">Services</h3>
          <ul>
            {ServicesLinks.map((link) => (
              <li key={link.id}>
                <a href="#" className="text-gray-400 hover:text-white">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {/* Resources links section */}
          <h3 className="text-xl font-bold mb-4 text-white">Resources</h3>
          <ul>
            {ResourcesLinks.map((link) => (
              <li key={link.id}>        
                <a href="#" className="text-gray-400 hover:text-white">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {/* Support links section */}
          <h3 className="text-xl font-bold mb-4 text-white">Support</h3>
          <ul>
            {SupportLinks.map((link) => (
              <li key={link.id}>
                <a href="#" className="text-gray-400 hover:text-white">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 text-center text-white space-y-4">
        {/* Footer copyright notice */}
        <div>© {new Date().getFullYear()} Brand. All rights reserved.</div>
      </div>
    
    </footer>
  );
}
