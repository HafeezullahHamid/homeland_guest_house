const ContactUs = () => {
  return (
    <section id="contact" className="py-20 bg-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Google Map Location */}
          <div className="w-full md:w-1/2 lg:w-1/3 bg-white h-[200px] rounded-lg shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3256.726050326835!2d75.64304407610393!3d35.28793685147805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e4638cb34c9857%3A0xafe178b3d9052b31!2sHomeland%20Guest%20House%20Skardu!5e0!3m2!1sen!2s!4v1726166744410!5m2!1sen!2s"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
              title="Google Maps Location"
            ></iframe>
          </div>
          {/* Contact Form */}
          <form className="w-full md:w-1/2 lg:w-2/3 space-y-4 p-4 bg-white rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div className="flex-1">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div className="flex-1">
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone"
                  className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message"
                className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-primary"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
