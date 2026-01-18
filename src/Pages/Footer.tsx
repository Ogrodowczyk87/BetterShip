// Import React library
import React from "react";
import {
  companyLinks,
  servicesLinks,
  resourcesLinks,
  supportLinks,
} from "../data/footerLinks";

// Define the Footer component
export default function Footer() {
  return (
    // Footer section with background and text styling
    <footer className="bg-white text-slate-700 py-8 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <div>
          {/* Company links section */}
          <h3 className="text-xl font-bold mb-4 text-slate-900">Company</h3>
          <ul>
            {companyLinks.map((link) => (
              <li key={link.id}>   
                <a href={link.href} className="text-slate-600 hover:text-slate-900">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {/* Services links section */}
          <h3 className="text-xl font-bold mb-4 text-slate-900">Services</h3>
          <ul>
            {servicesLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href} className="text-slate-600 hover:text-slate-900">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {/* Resources links section */}
          <h3 className="text-xl font-bold mb-4 text-slate-900">Resources</h3>
          <ul>
            {resourcesLinks.map((link) => (
              <li key={link.id}>        
                <a href={link.href} className="text-slate-600 hover:text-slate-900">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {/* Support links section */}
          <h3 className="text-xl font-bold mb-4 text-slate-900">Support</h3>
          <ul>
            {supportLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href} className="text-slate-600 hover:text-slate-900">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 text-center text-slate-600 space-y-4">
        {/* Footer copyright notice */}
        <div>© {new Date().getFullYear()} Brand. All rights reserved.</div>
      </div>
    
    </footer>
  );
}
