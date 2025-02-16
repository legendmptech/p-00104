"use client";
import React from "react";
import { postAdminClientForm } from "@/lib/clientFetch";

export default function AdminClientForm() {
  async function handleSubmit(): Promise<void> {
    const clientNameInput = document.getElementById(
      "client_name"
    ) as HTMLInputElement;
    const clientPlaceInput = document.getElementById(
      "client_place"
    ) as HTMLInputElement;
    const clientImageInput = document.getElementById(
      "client_image"
    ) as HTMLInputElement;

    const client_name = clientNameInput?.value || "";
    const client_place = clientPlaceInput?.value || "";
    const client_image = clientImageInput?.value || "";

    try {
      const response = await postAdminClientForm({
        client_image,
        client_place,
        client_name,
      });
      if (!!response?.error) {
        alert(response.error);
      } else {
        alert("Client Created Successfully!");
      }
    } catch (e: any) {
      alert(e.message);
    }
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="client_name"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          Client Name
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter Client Name"
            name="client_name"
            id="client_name"
            required
            className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="client_place"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          Client Place
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter Client Place"
            name="client_place"
            id="client_place"
            required
            className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="client_image"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          Client Image URL
        </label>
        <div className="relative">
          <input
            type="url"
            placeholder="Enter Client Image URL"
            name="client_image"
            id="client_image"
            required
            className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 w-full rounded-lg bg-primary py-3 font-medium text-white hover:bg-primary-dark focus:outline-none"
      >
        SUBMIT
      </button>
    </form>
  );
}
