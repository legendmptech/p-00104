import Image from "next/image";

const RemarkableProjects = () => {
  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">
          Our Remarkable Projects
        </h2>
        <div className="space-y-12">
          {/* Project 1 */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <Image
                src="/images/bg-construction.png"
                alt="Project 1"
                width={500}
                height={300}
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-4">Project One</h3>
              <p className="text-lg text-gray-700">
                This is a description of the first remarkable project. We worked
                on this project to deliver outstanding results with a focus on
                innovation and excellence.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8">
            <div className="md:w-1/2">
              <Image
                src="/images/bg-construction.png"
                alt="Project 2"
                width={500}
                height={300}
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-4">Project Two</h3>
              <p className="text-lg text-gray-700">
                The second remarkable project involved cutting-edge technologies
                and a focus on sustainability. We achieved outstanding results
                with this project.
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <Image
                src="/images/bg-construction.png"
                alt="Project 3"
                width={500}
                height={300}
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-4">Project Three</h3>
              <p className="text-lg text-gray-700">
                Project three was a breakthrough project that involved a variety
                of creative and technical solutions to overcome complex
                challenges and deliver impactful results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemarkableProjects;
