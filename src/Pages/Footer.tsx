import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div>© {new Date().getFullYear()} Brand. All rights reserved.</div>
      </div>
    </footer>
  );
}
