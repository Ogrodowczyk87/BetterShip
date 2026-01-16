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
    <section id="contact" className="pb-6 bg-black">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section heading with a call-to-action */}
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Have a project in mind?{" "}
          <span className="text-indigo-300">Let's talk!</span>
        </h2>
        {/* Contact form */}
        <form
          className="space-y-4 flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          {/* Input field for email */}
          <input
            type="email"
            className="w-[300px] p-3 bg-slate-900/45 border border-slate-600 rounded-lg text-slate-300 hover:bg-slate-500/30 hover:text-white"
            placeholder="Email"
            required
          />
          <div className="text-center">
            {/* Submit button */}
            <button
              className="px-6 py-3 bg-slate-800/50 text-white rounded-md"
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
