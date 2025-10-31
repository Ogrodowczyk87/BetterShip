// Import React library
import React from "react";

// Define the Contact component
export default function Contact() {
  return (
    // Main section for the Contact component
    <section id="contact" className="pb-6 bg-black">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section heading with a call-to-action */}
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Have a project in mind?{" "}
          <span className="text-indigo-300">Let's talk!</span>
        </h2>
        {/* Contact form */}
        <form className="space-y-4 flex flex-col items-center">
          {/* Input field for email */}
          <input
            className="w-[300px] p-3 bg-slate-900/45 border border-slate-600 rounded-lg text-slate-300 hover:bg-slate-500/30 hover:text-white"
            placeholder="Email"
          />
          <div className="text-center">
            {/* Submit button */}
            <button className="px-6 py-3 bg-slate-800/50 text-white rounded-md">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
