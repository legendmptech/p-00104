"use client";
import React, { useState, useEffect } from "react";
import { getAdminClients, postAdminProjectForm } from "@/lib/clientFetch";
import SelectGroupOne from "../FormElements/SelectGroup/SelectGroupOne";
import { CLIENTS } from "@/types/clients";
import { PROJECTS } from "@/types/projects";

export default function AdminProjectForm() {
  const [clients, setClients] = useState<{ label: string; value: any }[]>([]);
  const [selectedClient, setSelectedClient] = useState<number | "">("");

  useEffect(() => {
    async function fetchClients() {
      try {
        const clientData = await getAdminClients();

        setClients(
          clientData?.map((obj: CLIENTS) => ({
            label: obj.client_name,
            value: obj.client_id,
          })) || []
        );
      } catch (error: any) {
        console.error("Error fetching clients:", error.message);
      }
    }
    fetchClients();
  }, []);

  async function handleSubmit(): Promise<void> {

    const projectNameInput = document.getElementById(
      "project_name"
    ) as HTMLInputElement;
    const projectDescInput = document.getElementById(
      "project_desc"
    ) as HTMLInputElement;
    const projectTypeInput = document.getElementById(
      "project_type"
    ) as HTMLInputElement;
    const projectStartDateInput = document.getElementById(
      "project_start_date"
    ) as HTMLInputElement;
    const projectEndDateInput = document.getElementById(
      "project_end_date"
    ) as HTMLInputElement;
    const projectPlaceInput = document.getElementById(
      "project_place"
    ) as HTMLInputElement;
    const projectImageInput = document.getElementById(
      "project_image"
    ) as HTMLInputElement;

    const project_name = projectNameInput?.value || "";
    const project_desc = projectDescInput?.value || "";
    const project_type = projectTypeInput?.value || "";
    const project_start_date = projectStartDateInput?.value || "";
    const project_end_date = projectEndDateInput?.value || "";
    const project_place = projectPlaceInput?.value || "";
    const project_image = projectImageInput?.value || "";

    if (!selectedClient) {
      alert("Please select a client.");
      return;
    }
    try {
      const data: PROJECTS = {
        project_name,
        project_desc,
        project_type,
        project_start_date: new Date(project_start_date),
        project_end_date: new Date(project_end_date),
        project_place,
        project_image,
        client_id: selectedClient,
      };
      const response = await postAdminProjectForm(data);
      if (response?.error) {
        console.error(response.error);
      } else {
        alert("Project Created Successfully!");
      }
    } catch (error: any) {
      alert(error.message);
      console.error(error.message);
    }
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="project_name"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          Project Name
        </label>
        <input
          type="text"
          id="project_name"
          placeholder="Enter Project Name"
          required
          className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="project_desc"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          Project Description
        </label>
        <textarea
          id="project_desc"
          placeholder="Enter Project Description"
          required
          className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          htmlFor="project_type"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          Project Type
        </label>
        <input
          type="text"
          id="project_type"
          placeholder="Enter Project Type"
          required
          className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="project_start_date"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          Project Start Date
        </label>
        <input
          type="date"
          id="project_start_date"
          required
          className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="project_end_date"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          Project End Date
        </label>
        <input
          type="date"
          id="project_end_date"
          required
          className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="project_place"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          Project Place
        </label>
        <input
          type="text"
          id="project_place"
          placeholder="Enter Project Place"
          required
          className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="project_image"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          Project Image URL
        </label>
        <input
          type="url"
          id="project_image"
          placeholder="Enter Project Image URL"
          required
          className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
        />
      </div>
      <div className="mb-4">
        <SelectGroupOne
          labelText="Select Client"
          options={clients}
          placeholder="Select a client"
          selectedOption={selectedClient}
          setSelectedOption={setSelectedClient}
        />
      </div>
      <button
        type="submit"
        className="mt-4 w-full rounded-lg bg-primary py-3 font-medium text-white hover:bg-primary-dark"
      >
        SUBMIT
      </button>
    </form>
  );
}
