import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="py-16 bg-black">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Have a project in mind? <span className="text-indigo-600">Let's talk!</span></h2>
        <form className="space-y-4">
          <input className="w-full p-3 border rounded" placeholder="Email" />
          <div className="text-center">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-md">Send</button>
          </div>
        </form>
      </div>
    </section>
  )
}
