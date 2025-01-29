// components/VisionMission.js
import { FaLeaf, FaGlobeAmericas } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa"; // Import the quotation mark icon

export default function VisionMission() {
  return (
    <section className="w-full py-8 bg-white">
      <div className="w-full max-w-5xl mx-auto px-6 text-center">
        <div className="w-full p-5 border-4 border-black border-dashed">
          <h2 className="flex flex-row gap-3 text-3xl sm:text-4xl font-bold mb-6 relative">
            <FaQuoteLeft className="text-4xl sm:text-4xl text-black" />
            <span className="pl-12">Our Mission</span>
          </h2>
          <p className="text-xl sm:text-2xl">
            To meet the needs of the present generation without compromising the
            quality of the environment for future generations.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-5 sm:gap-8 my-12">
          <div className="flex flex-col items-center p-3 border-2 border-gray">
            <FaLeaf className="text-5xl mb-4" />
            <h3 className="text-2xl sm:text-3xl font-semibold">
              Sustainability
            </h3>
            <p className="text-lg mt-2">
              We strive for a future where businesses and nature grow together,
              fostering an environment that thrives for generations to come.
            </p>
          </div>
          <div className="flex flex-col items-center p-3 border-2 border-gray">
            <FaGlobeAmericas className="text-5xl mb-4" />
            <h3 className="text-2xl sm:text-3xl font-semibold">
              Global Impact
            </h3>
            <p className="text-lg mt-2">
              Our mission is to create solutions that have a lasting impact on
              businesses and the planet, promoting a brighter future for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
