// Import React library
import React from "react";
// Define the Contact component
export default function Contact() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    // Main section for the Contact component
    <section id="contact" className="pb-6 bg-[#f8f5f2]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section heading with a call-to-action */}
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Have a project in mind?{" "}
          <span className="text-blue-600">Let's talk!</span>
        </h2>
        {/* Contact form */}
        <form
          className="space-y-4 flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          {/* Input field for email */}
          <label className="sr-only" htmlFor="contact-email">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            className="w-[300px] p-3 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
            required
          />
          <div className="text-center">
            {/* Submit button */}
            <button
              className="px-6 py-3 bg-blue-600 text-white rounded-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200/70"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
