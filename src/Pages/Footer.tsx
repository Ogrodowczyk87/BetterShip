import React from "react";

export const CompanyLinks = [
  { id: 1, title: "Company" },
  { id: 2, title: "About Us" },
  { id: 3, title: "Service" },
  { id: 4, title: "Contact" }
]

export const ServicesLinks = [
  { id: 1, title: "Web Development" },
  { id: 2, title: "App Development" },
  { id: 3, title: "SEO" },
  { id: 4, title: "Digital Marketing" }
]

export default function Footer() {
  return (
    <footer className="bg-black text-gray-800  py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Company</h3>  
          <ul>
            {CompanyLinks.map(link => (
              <li key={link.id}>
                <a href="#" className="text-gray-400 hover:text-white">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Services</h3>
          <ul>
            {ServicesLinks.map(link => (
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
        <div>© {new Date().getFullYear()} Brand. All rights reserved.</div>
      </div>
    </footer>
  );
}
