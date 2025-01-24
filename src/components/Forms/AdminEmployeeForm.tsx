"use client";
import React from "react";
import { postAdminEmployeeForm } from "@/lib/clientFetch";

export default function AdminClientForm() {
  async function handleSubmit(): Promise<void> {
    const empNameInput = document.getElementById(
      "emp_name"
    ) as HTMLInputElement;
    const empEmailInput = document.getElementById(
      "emp_email"
    ) as HTMLInputElement;
    const empImageInput = document.getElementById(
      "emp_image"
    ) as HTMLInputElement;
    const empDesignInput = document.getElementById(
      "emp_designation"
    ) as HTMLInputElement;
    const empPhoneNoInput = document.getElementById(
      "emp_phone_no"
    ) as HTMLInputElement;

    const emp_name = empNameInput?.value || "";
    const emp_email = empEmailInput?.value || "";
    const emp_image = empImageInput?.value || "";
    const emp_designation = empDesignInput?.value || "";
    const emp_phone_no = empPhoneNoInput?.value || "";

    try {
      let response = await postAdminEmployeeForm({
        emp_name,
        emp_email,
        emp_image,
        emp_designation,
        emp_phone_no,
      });
      if (response?.error) {
        console.log(response.error);
      } else {
        alert("Employee Created Successfully!");
      }
    } catch (e: any) {
      console.log(e);
    }
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="emp_name"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          Employee Name
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter Employee Name"
            name="empr_name"
            id="emp_name"
            required
            className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="emp_email"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          Employee Email
        </label>
        <div className="relative">
          <input
            type="email"
            placeholder="Enter User Email"
            name="emp_email"
            id="emp_email"
            required
            className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="emp_image"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          Employee Image URL
        </label>
        <div className="relative mb-4">
          <input
            type="url"
            placeholder="Enter Employee Image URL"
            name="emp_image"
            id="emp_image"
            required
            className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="emp_designation"
            className="mb-2.5 block font-medium text-dark dark:text-white"
          >
            Employee Designation
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Employee Designation"
              name="emp_designation"
              id="emp_designation"
              required
              className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="emp_phone_no"
            className="mb-2.5 block font-medium text-dark dark:text-white"
          >
            Employee Phone Number
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Employee Phone Number"
              name="emp_phone_no"
              id="emp_phone_no"
              required
              className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>
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
