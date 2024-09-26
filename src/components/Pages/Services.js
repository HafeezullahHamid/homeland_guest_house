
import Security from "./../././../assets/security.jpg";
import NightMusic from "./../././../assets/night-music.jpg";
import Breakfast from "./../././../assets/breakfast.jpg";
import Wellness from "./../././../assets/wellness.jpg";
import Dinner from "./../././../assets/dinner.jpg";
import Tea from "./../././../assets/tea-time-.jpg";
import WiFi from "./../././../assets/wifii.jpg";
import Staff from "./../././../assets/front.jpg";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white  bg-gray-100">
      <div className="services py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8  md:mb-12">
            Our Services
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            <li className="bg-white shadow-md rounded p-6 text-center group ">
              <h3 className="text-xl font-bold mb-2">Free Wi-Fi</h3>
              <p className="text-gray-700">
                Stay connected with our high-speed internet.
              </p>
              <img
                src={WiFi}
                alt="Wi-Fi"
                className="mt-4 rounded   rounded-lg rounded-lg w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </li>

            <li className="bg-white shadow-md rounded p-6 text-center group  ">
              <h3 className="text-xl font-bold mb-2">BreakfastIncluded</h3>
              <p className="text-gray-700">
                Enjoy a delicious breakfast to start your day.
              </p>
              <img
                src={Breakfast}
                alt="Breakfast"
                className="mt-4 rounded  rounded-lg rounded-lg w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </li>

            <li className="bg-white shadow-md rounded p-6 text-center group ">
              <h3 className="text-xl font-bold mb-2">24/7 Front Desk</h3>
              <p className="text-gray-700">
                Our friendly staff is available around the clock.
              </p>
              <img
                src={Staff}
                alt="Staff"
                className="mt-4 rounded  rounded-lg rounded-lg w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </li>

            <li className="bg-white shadow-md rounded p-6 text-center group ">
              <h3 className="text-xl font-bold mb-2">
                Spa and Wellness Center
              </h3>
              <p className="text-gray-700">
                Relax and unwind at our <br /> on-site spa.
              </p>
              <img
                src={Wellness}
                alt="WellnessCenter"
                className="mt-4 rounded  rounded-lg rounded-lg w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </li>

            <li className="bg-white shadow-md rounded p-6 text-center group ">
              <h3 className="text-xl font-bold mb-2">Lunch and Dinner</h3>
              <p className="text-gray-700">
                Enjoy our delectable lunch and dinner options.
              </p>
              <img
                src={Dinner}
                alt="Dinner"
                className="mt-4 rounded rounded-lg rounded-lg w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </li>

            <li className="bg-white shadow-md rounded p-6 text-center group ">
              <h3 className="text-xl font-bold mb-2">Tea Time</h3>
              <p className="text-gray-700">
                Unwind with a refreshing cup of tea. Enjoy with tea{" "}
              </p>
              <img
                src={Tea}
                alt="Tea Time"
                className="mt-4 rounded  rounded-lg rounded-lg w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </li>

            <li className="bg-white shadow-md rounded p-6 text-center group">
              <h3 className="text-xl font-bold mb-2">Night Music</h3>
              <p className="text-gray-700">
                Enjoy live music and entertainment in the evening. refreshing
                your souel
              </p>
              <img
                src={NightMusic}
                alt="Night Music"
                className="mt-4 rounded rounded-lg rounded-lg w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </li>

            <li className="bg-white shadow-md rounded p-6 text-center group ">
              <h3 className="text-xl font-bold mb-2">Security</h3>
              <p className="text-gray-700">
                Enjoy a safe and secure stay with our 24/7 security monitoring.
              </p>
              <img
                src={Security}
                alt="Security"
                className=" mt-4  rounded rounded-lg rounded-lg w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
