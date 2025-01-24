// ProjectCard.tsx
import { PROJECTS } from "@/types/projects";
import Image from "next/image";

const ProjectCard: React.FC<PROJECTS> = ({
  project_name,
  project_desc,
  project_type,
  project_start_date,
  project_end_date,
  project_place,
  project_image,
  client_name,
  client_image,
  client_place,
}) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="relative w-full h-40">
        <Image
          src={project_image}
          alt={`${project_name} image`}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{project_name}</h2>
        <p className="text-gray-600">{project_desc}</p>
        <p className="text-gray-600">
          <strong>Type:</strong> {project_type}
        </p>
        <p className="text-gray-600">
          <strong>Start:</strong> {project_start_date.toDateString()}
        </p>
        <p className="text-gray-600">
          <strong>End:</strong> {project_end_date.toDateString()}
        </p>
        <p className="text-gray-600">
          <strong>Place:</strong> {project_place}
        </p>
        <div className="flex items-center mt-4">
          <div className="relative w-10 h-10 mr-3">
            <Image
              src={client_image || ""}
              alt={`${client_name}'s image`}
              fill
              className="object-cover rounded-full"
            />
          </div>
          <div>
            <p className="text-gray-800 font-medium">{client_name}</p>
            <p className="text-gray-600">{client_place}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
