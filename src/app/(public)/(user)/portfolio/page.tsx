import Image from "next/image";
import { projectData } from "@/data/project";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl sm:text-4xl font-bold text-center text-gray-800 mb-8">Our Projects</h1>
      <div className="space-y-8">
        {projectData.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800">{project.name}</h2>
            <p className="text-gray-600">Estimated Cost: ₹{project.est_cost} Lakhs</p>
            <p className="text-gray-500">Year: {project.year}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {project.images.map((image, i) => (
                <Image key={i} loading="lazy" src={image} alt={`Project Image ${i + 1}`} width={400} height={250} className="rounded-lg" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


// "use client"
// import Image from "next/image";
// import { useState } from "react";
// import { projectData } from "@/data/project";

// export default function PortfolioPage() {
//   const [selectedProject, setSelectedProject] = useState<any>(null);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Projects</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projectData.map((project, index) => (
//           <div
//             key={index}
//             className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition"
//             onClick={() => setSelectedProject(project)}
//           >
//             <Image
//               src={project.images[0]}
//               alt={project.name}
//               width={400}
//               height={250}
//               className="rounded-lg"
//             />
//             <h2 className="text-xl font-semibold mt-4">{project.name}</h2>
//             <p className="text-gray-600">Estimated Cost: ₹{project.est_cost} Lakhs</p>
//             <p className="text-gray-500">Year: {project.year}</p>
//           </div>
//         ))}
//       </div>
//       {selectedProject && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center p-4" onClick={() => setSelectedProject(null)}>
//           <div className="bg-white p-6 rounded-lg max-w-2xl">
//             <h2 className="text-2xl font-bold mb-4">{selectedProject.name}</h2>
//             <p className="text-gray-700">Estimated Cost: ₹{selectedProject.est_cost} Lakhs</p>
//             <p className="text-gray-600 mb-4">Year: {selectedProject.year}</p>
//             <div className="flex space-x-2 overflow-x-auto">
//               {selectedProject.images.map((image: any, i: number) => (
//                 <Image key={i} src={image} alt={`Project Image ${i + 1}`} width={200} height={150} className="rounded-lg" />
//               ))}
//             </div>
//             <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg" onClick={() => setSelectedProject(null)}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
