import React from "react";
import Room1 from "./../../Images/room-12.jpeg";
import Room2 from "./../../Images/room-11.jpeg";
import Room3 from "./../../Images/room-10.jpeg";
import BedRoom from "./../../Images/bedroom.jpg";
import familyRoom from "./../../Images/room-8.jpeg";
import doubleRoom from "./../../Images/room-12.jpeg";
import familyRoom2 from "./../../Images/details-1.jpeg";

const Rooms = () => {
  return (
    <section id="rooms" className="py-20 bg-gray-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-18 top  md:mb-12">
          Our Rooms
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-5xl font-bold mb-[20px] ">
              Discover our exquisite rooms
            </h2>
            <p className="text-gray-700 font-serif ...">
              Discover our exquisite rooms, meticulously designed for your
              comfort and pleasure.
              <br />
              Immerse yourself in the stunning mountain views, and indulge in
              our well-equipped amenities.
              <br />
              Experience the ultimate in luxury and relaxation.
              <br />
              Wake up to the tranquil sounds of nature, rejuvenating your spirit
              with every moment.
              <br />
              Savor gourmet meals crafted with local, fresh ingredients,
              prepared by our expert chefs.
              <br />
              Let your worries melt away in our state-of-the-art spa, designed
              to enhance your well-being.
              <br />
              Enjoy a morning coffee on your private balcony as the sun rises
              over the horizon.
              <br />
              Stroll through our beautifully landscaped gardens, where every
              corner tells a story of serenity.
              <br />
              End your day by the cozy fireplace, with a glass of wine and the
              stars above.
              <br/>
              Unwind in our elegant infinity pool, where the water meets the sky in a seamless embrace.
              <br />
              Stay connected with complimentary high-speed Wi-Fi, perfect for both work and play.
              <br />
              Explore the nearby hiking trails, leading to breathtaking viewpoints and hidden waterfalls.
              <br />
              Create lasting memories with personalized services, ensuring your stay is nothing short of perfect.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={BedRoom}
              alt="Room 1"
              className=" shadow-lg w-full h-auto rounded-xl"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="room-card">
            <img src={Room1} alt="Room 1" className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Room 1</h3>
            <p>Spacious and well-equipped room with stunning mountain views.</p>
          </div>
          <div className="room-card">
            <img src={Room2} alt="Room 1" className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Room 2</h3>
            <p>Spacious and well-equipped room with stunning mountain views.</p>
          </div>
          <div className="room-card">
            <img src={Room3} alt="Room 3" className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Room 3</h3>
            <p>Spacious and well-equipped room with stunning mountain views.</p>
          </div>

          <div className="single-room group">
            <img
              src={familyRoom}
              alt="Single Room"
              className=" w-full h-58 object-cover group-hover:scale-105 transition-transform duration-300 "
            />
            <h3 className="text-xl font-bold mt-4">Single Room</h3>
            <p className="text-gray-600">Cozy room for solo travelers.</p>
          </div>

          <div className="single-room group">
            <img
              src={familyRoom2}
              alt="Single Room"
              className=" w-full h-58 object-cover group-hover:scale-105 transition-transform duration-300 "
            />
            <h3 className="text-xl font-bold mt-4">Single Room</h3>
            <p className="text-gray-600">Cozy room for solo travelers.</p>
          </div>

          <div className="double-room group">
            <img
              src={doubleRoom}
              alt="Double Room"
              className=" w-full h-58 object-cover group-hover:scale-105 transition-transform duration-300 "
            />
            <h3 className="text-xl font-bold mt-4">Double Room</h3>
            <p className="text-gray-600">Comfortable room for couples.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
