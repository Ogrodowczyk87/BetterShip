import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Contact Us</h2>
        <form className="space-y-4">
          <input className="w-full p-3 border rounded" placeholder="Your name" />
          <input className="w-full p-3 border rounded" placeholder="Your email" />
          <textarea className="w-full p-3 border rounded" placeholder="Message" rows={6}></textarea>
          <div className="text-center">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-md">Send message</button>
          </div>
        </form>
      </div>
    </section>
  )
}
