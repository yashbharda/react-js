function Contact() {
  return (
    <div className="min-h-screen bg-indigo-50 flex items-center justify-center px-6">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-lg">
        <h1 className="text-4xl font-bold text-indigo-700 text-center">
          Contact Us
        </h1>

        <div className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-indigo-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-indigo-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border border-indigo-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 rounded-xl hover:opacity-90 transition">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
