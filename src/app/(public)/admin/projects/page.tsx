"use client";

import Modal from "@/components/Modal";
import React, { useEffect, useState } from "react";
import { getAdminProjects } from "@/lib/clientFetch"; // Replace with your fetch function
import { PROJECTS } from "@/types/projects"; // Replace with the PROJECTS type
import ProjectCard from "@/components/Cards/ProjectCard";
import AdminProjectForm from "@/components/Forms/AdminProjectForm";

const AdminProjectPage = () => {
  const [projects, setProjects] = useState<PROJECTS[] | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getAdminProjects();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex w-full mb-4 justify-end items-end">
        <Modal modalBtnLabel="ADD PROJECT" modalTitle="Project Form">
          <AdminProjectForm />
        </Modal>
      </div>
      <h4 className="text-heading-4 mb-6">Projects</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
        {projects === null ? (
          <p>Loading...</p> // Add a loading indicator
        ) : (
          projects?.map((project, i) => (
            <ProjectCard
              key={i}
              project_name={project.project_name}
              project_desc={project.project_desc}
              project_type={project.project_type}
              project_start_date={new Date(project.project_start_date)}
              project_end_date={new Date(project.project_end_date)}
              project_place={project.project_place}
              project_image={project.project_image}
              client_id={project.client_id}
              client_name={project.client_name}
              client_image={project.client_image}
              client_place={project.client_place}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AdminProjectPage;
