"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SigninWithPassword() {
  const router = useRouter();
  async function handleSubmit(): Promise<void> {
    const emailInput = document.getElementById(
      "user_email"
    ) as HTMLInputElement;
    const passwordInput = document.getElementById(
      "user_password"
    ) as HTMLInputElement;

    const user_email = emailInput?.value || "";
    const user_password = passwordInput?.value || "";

    try {
      const response = await signIn("credentials", {
        redirect: false,
        user_email,
        user_password,
      });
      if (!!response?.error) {
        alert(response.error);
      } else {
        router.push("/admin");
      }
    } catch (e: any) {
      alert(e.message);
    }
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          Email
        </label>
        <div className="relative">
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            id="user_email"
            className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
        </div>
      </div>

      <div className="mb-5">
        <label
          htmlFor="password"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          Password
        </label>
        <div className="relative">
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            autoComplete="password"
            id="user_password"
            className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
        </div>
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
        className="mt-4 w-full rounded-lg bg-primary py-3 font-medium text-white hover:bg-primary-dark focus:outline-none"
      >
        Sign In
      </button>
    </form>
  );
}
