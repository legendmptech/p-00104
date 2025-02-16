import VisionMission from "@/components/HomePageComponents/VisionMission";
import Image from "next/image";

const employees = [
  {
    name: "Abraham Francis.A",
    designation: "Manager",
    qualification: "M.E",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBCLi3xnayaayFJlpvH8X795wkbt8JLXUBHdL4Q1mwpHX6WvMYd0ygT8Cx9T04S0gv4JJFNMwgkgsU4i9U_baSAEQd8FdKN_GgALlhCCyqVTtoyggK6IdPLIv06FQjpzU4STKUVlGbgWJiTDoUcguynVew0qYC3F4JBlobDV3q4rQhF_UW0nJYKPhsPi9x/w640-h640/Er.ABRAHAM%20FRANCIS.jpeg",
  },
  {
    name: "Abinesh.M",
    designation: "Junior Engineer / Drafting",
    qualification: "B.E",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiECkeKOvdU0DIJlyF1QQpaRi5o51f1T_63SEfHez9mK4HDdSJbVFLrn4O_vb1PdG430a2Fu-7UHuuluE_N7EDWHGZ7GpOdpmC6AudD3teeOnVBItslQHu3UTtgxLuWl7qIsZM_WbTdSumwHlBTzsxNRG0wzX-wETLbFRXPb02B1OyJm5VuJQz6dJjmx6Id/w506-h640/Er.ABINESH.jpeg",
  },
  {
    name: "Anthony.T",
    designation: "Project Engineer / Surveyor",
    qualification: "DCE",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnDil_I5WTCuEyCO7r1Wiy3FO79LBShap-pGrFPyHbpJgefSZN9Kst5Mf3fH-m7nu4LaBIXbUzBZAunPmK7cvSo7CMtP3Bgbdf2uKA2k9OHXTT9hxz_qVH9VGSg7fkbwPeHKNkUOK8Wz5_Myzv7Wlz0Z7NpCEfN4JArQJJGrmU0agtYqkJCF4VZ_ozDGVA/w564-h640/Er.ANTHONY.jpeg",
  },
  {
    name: "Arjun.S",
    designation: "Project Engineer / Drafting",
    qualification: "DCE",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwdtYLE583wxnxJrWcUaZeB0Rl5UsM_sPH6E_5m5szHU2o9Tg8tfSkRqXLQiD-L3yPQQIpxXp_1M13mzUI-s5FmtTepEKiAg5jfvfT3nN6XBoxuFIImvzcpCHdvPSelaBpUeHeUzoEmDdh0wuzX9unsMIvadzBfF15j_v5wxUHoR_jCP8QNINHjE7D-MTC/w638-h640/Er.%20ARJUN%20S.jpeg",
  },
  {
    name: "Johnson.P",
    designation: "Senior Administration",
    qualification: "B.Com",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgiQLCyvctxw-X-8zPAyCSB6joOGYgvzFsB1Y0zHIjfo81Mtby-hmF83Wzk2OohcWuo0ii04Kczxu2zaw9ndXURwjvJVIATkq9CaVFCxl6FKO5HpVaJqOa3fxuFGeJihh6M8z5Tfw4Uc_mewvQjqE9kfafB13IeU2FzgYzKWV82O6OaxyVXWo03AjvNvfS6/w606-h640/Er.JONHSON.jpeg",
  },
  {
    name: "Karthickraja.E",
    designation: "Project Engineer/Planning",
    qualification: "B.E",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6akvcduukWPFlIlhjg7gTuOuUdBnAGTy3uDaJJSFWZkESvAz3rU0vlJo-sgJzgyVhj_ZdUtLqCZwsJmZwSnRLAft-0GVBM75jXKKj1H0zBdPGv4JtAMCuy4oydBslbxoi1fGUU9o164D8tEB_IKCVC3n7Pkm5B6ZHPiao7zt-hig-YvHkQ6kAUjWyAdYb/w562-h640/Er.KARTHICK%20RAJA.jpeg",
  },
  {
    name: "Petchimuthu P",
    designation: "Project Engineer/Quantity Surveyor",
    qualification: "B.E",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhprpU-2Ew3Z7yM1WhfMNobHey5xRHb1m137C8RA7_eqTdzIzssD3X30qNzjWmA546UdPbxTy77wbowsas8Ih7jNKZt2SKg-EQ76YHhgSLDcLJqd6YIRBBB9-B63WrwfnJDr4QtQbuMQ2rHawQiupQtgrKdgIVvfO14MApDLu718qgoDpq1dmXdyFNV0V8t/w640-h634/Er.PETCHIMUTHU.jpeg",
  },
  {
    name: "Ramasamy P",
    designation: "Project Engineer",
    qualification: "B.E",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-ewVr32y3zb4pVyrVYrcReOBdrnugz98NUnwuWBMx_4cDm4Z8VrMSHyedKEa1KUMbM8ilS_BSpZlzSGBeb6XY9GvmiswC04E68zcHk3GK1OyK4tcVwct8y6ZiEco_5deWkG0R5dCQ2xjJb8apOrQHQdTN-vVQzlrPUH5vnfjrsOUQzEYMJce3FMbEyPUX/w558-h640/Er.RAMSAMY.jpeg",
  },
  {
    name: "Rathina Balaji.S",
    designation: "Project Manager",
    qualification: "B.E",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhb-CmGaz1sXOH6B0iRGkYjJ45Hz5ANM6xvwFDE4NgkBTFpp1-wN4OTOeuONz9zYx600-urHRPE2XXkC6rpXhpgnyDcB4p1kP_DK8-O1hrJIahQc3I57-hXo3-KaH_9B1-kAoueEcAVsL7nN736xJSrYpwluO1aHiwRL_NzNNvwSg7_Y3NTW_3ZIytB9c0W/w640-h638/Er.RATHNA%20BALAJI.jpeg",
  },
  {
    name: "Sudhakar G",
    designation: "Project Engineer / Design",
    qualification: "B.E",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSEvr-PvxYbDioMCNRDzDEKxihxrwDlx2SKzvf2JsujlMwA8ZQNTI1WVxIWdr343C1iqbnDCtQlgkvtVSzaOXcVHgpkJpLVrCnElwdXoj0uFvhchaizTRqp4IVkdIMD1nTqr4zYE5HNbQLYooNOSF5hXExWSuDH_mhCXgXzgcKQW1PXft47gYhm-43abht/w568-h640/Er.SUDHAKAR.jpeg",
  },
  {
    name: "Surya Prakash D",
    designation: "Project Engineer",
    qualification: "M.E",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjEtzipJF4KmM7j5ajhyphenhyphen2IGHP0gtACA7EQ0uTOgIaA2V7SbYLWcuHCxhGS0DWSs1KhvnpFECDaJ9NRWPkJwiMDU_0fxA65Zw_UYvRKrmTdYlv1y4ES_moFNMAYzwIfT83u7xG88KEqpK_UJhAmlaSwz7enNdJgSpC4QW3rZQiK9lncYEKuqGES8GjBKhxlY/w492-h640/Er.%20SURYA%20PRAKASH%20D.jpeg",
  },
  {
    name: "Uthayakumar M",
    designation: "Project Engineer / Design",
    qualification: "B.E",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEheBuss3W7SOqrukJJvKaVwQJ6iPNui3ZIISiS0eo4LDJv0P1JBifCP77SvOYwEEmQdXrqQrCuPKPHDJIs3GIgZU2WL2NK6FnCBNvmXEyQp9cG7FwtKErQ12IXPfZFy0ueltN6xDib2ZCXlc9VbN_GELaEKESsAJBsqKQuI613orj4A2hU15DDAZEQ7nDxt/w626-h640/Er.UTHAYAKUMAR%20M.jpeg",
  },
  {
    name: "Vijaykumar.M",
    designation: "Project Manager",
    qualification: "B.E",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgf7CRIiHuNowCIWem-7EjpgoJmyd7RDgN42_F7L9oAEKwHRbBMvGzsIMBli9RyiehcNwvWK68wZ_xjteFtiU8TUkoEHVI8HIx3WWsSm0HdwyaNaYuwP7Pn4UcpopuEfr7Xy099IXuh32zW4X-EG2ipSCLDCUFsngHjJK-_4yU8sc2qTxDAVgZvzysHy6Mq/s16000/Er.%20VIJAYKUMAR%20M.jpeg",
  },
];

export default function page() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <section className="text-center mb-12">
        <h1 className="text-heading-3 font-bold text-gray-800 mb-4">
          About Us
        </h1>
        <p className="text-lg sm:text-xl text-gray-800 max-w-3xl mx-auto">
          Welcome to{" "}
          <span className="text-primary font-bold">
            AYOTHI CONSULTANCY PVT LTD
          </span>
          , a premier civil consultancy firm committed to transforming visions
          into releality. With a legacy of excellence and a passion for
          innovation, we stand as a trusted partner in shaping the
          infrastructure of tomorrow
        </p>
      </section>
      <VisionMission />
      <section className="w-full flex flex-col items-center mt-10">
        <h2 className="text-heading-4 font-bold text-center text-gray-800 mb-8">
          Our Team
        </h2>
        <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {employees.map((employee, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center transform transition hover:scale-105"
            >
              <Image
                src={employee.image}
                alt={employee.name}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4 border-4 border-gray-300"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {employee.name}
              </h3>
              <p className="text-gray-600">{employee.designation}</p>
              <p className="text-gray-500 text-sm">{employee.qualification}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
