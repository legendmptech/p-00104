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
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnZg1P0SZ86X6I2HsaKoK1wA68iJPuVSIEFSG1zpiegZirQXXERCZIYFRBIyQR69Vya-WEumqhyqKDQSc1TEgwBw-_UQ4YRVZR21UZ6WE-I2Z1R1C6DrEkXH4WnHE276zCGBZsoxfnESEJx1mGRSDdy0MYNJQYMDfwiyBVnJ1gA8lKCdCz0Ty4Zh940b_S/s16000/p-3.jpeg"
                alt="Project 1"
                width={500}
                height={300}
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">CONSTRUCTION OF CONVENTIONAL CENTER IN SIVAKASI CORPPORATION</h3>
              <ul className="text-lg sm:text-xl">
                <li><b>Year : </b>2024</li>
                <li><b>Estimated Cost : </b>1500 lakhs</li>
              </ul>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8">
            <div className="md:w-1/2">
              <Image
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPVTErqgLxJhpmhatCdUTLYB7NRV62K3WpkywqLXVoxoAFm04P6rwmFAos-zX2RRFZIWXVBNzbDW89gaPe6P6fxoA-NWXwU7msY_78EgQ-GNvsCgg4X6Ghxi8P1YiDufFJIHq_EUQtaSXYiiajU0oBpC0cylc9K2HO_1yj3dhyphenhyphendMOUwq_Lwz8bZoJ3-YwT/s16000/p-2(3).jpeg"
                alt="Project 2"
                width={500}
                height={300}
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">CONSTRUCTION OF NEW FISH MARKET IN PATTINAMPAKKAM IN CHENNAI CORPPORATION</h3>
              <ul className="text-lg sm:text-xl">
                <li><b>Year : </b>2024</li>
                <li><b>Estimated Cost : </b>1035 lakhs</li>
              </ul>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <Image
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5_l6USbh5lRBy4o1v6UrPnF8OfZ2uUG8po0Lxm9Fthvkkq9iof9hKpkPKWXzrfWb4nIKkOYsLBnH0DyT2j2NX1OlvGzkvGtw100C9iIAIOJwqK3uMIgixtNefRBVbZFuffvvTxiS8IyaBuQFLtJnBTjmRkuDj9zmxFREcir3XaP362qIL48BrQkkal_mv/s16000/p-1.png"
                alt="Project 3"
                width={500}
                height={300}
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">CONSTRUCTION OF ADDITIONAL MUNICIPAL OFFICE BUILDING IN GUDALUR MUNICIPAL OFFICE</h3>
              <ul className="text-lg sm:text-xl">
                <li><b>Year : </b>2022</li>
                <li><b>Estimated Cost : </b>110.85 lakhs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemarkableProjects;
