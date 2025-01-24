"use client";
import React, { useState } from "react";
import { postAdminUserForm } from "@/lib/clientFetch";
import SelectGroupOne from "../FormElements/SelectGroup/SelectGroupOne";
import { USER_TYPE } from "@/types/users";

export default function AdminClientForm() {
  const [userType, setUserType] = useState<USER_TYPE>("manager");
  async function handleSubmit(): Promise<void> {
    const userNameInput = document.getElementById(
      "user_name"
    ) as HTMLInputElement;
    const userEmailInput = document.getElementById(
      "user_email"
    ) as HTMLInputElement;
    const userPasswordInput = document.getElementById(
      "user_password"
    ) as HTMLInputElement;

    const user_name = userNameInput?.value || "";
    const user_email = userEmailInput?.value || "";
    const user_password = userPasswordInput?.value || "";

    try {
      let response = await postAdminUserForm({
        user_password,
        user_email,
        user_name,
        user_type: userType,
      });
      if (response?.error) {
        console.log(response.error);
      } else {
        alert("User Created Successfully!");
      }
    } catch (e: any) {
      console.log(e);
    }
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="user_name"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          User Name
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter User Name"
            name="user_name"
            id="user_name"
            required
            className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="user_email"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          User Email
        </label>
        <div className="relative">
          <input
            type="email"
            placeholder="Enter User Email"
            name="user_email"
            id="user_email"
            required
            className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="user_password"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          User Password
        </label>
        <div className="relative mb-4">
          <input
            type="password"
            placeholder="Enter User Password"
            name="user_password"
            id="user_password"
            required
            className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
        </div>
        <SelectGroupOne
          labelText="User Type"
          placeholder="Select User Type"
          selectedOption={userType}
          setSelectedOption={setUserType}
          options={[
            { label: "Admin", value: "admin" },
            { label: "Manager", value: "manager" },
            { label: "Employee", value: "employee" },
            { label: "User", value: "user" },
          ]}
        />
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
