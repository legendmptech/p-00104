"use client"
import React from "react";
import LoadingComponent from "./LoadingComponent";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    fetch(
      "https://script.google.com/macros/s/AKfycbwNIkF1Ly1WNbH6PqfG1kga9If6XWnpczKIW7Gmuq3EsVuJ_pCPS6czwH4YhVfTfpNk/exec",
      {
        method: "POST",
        mode:"cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        alert("Message Sent Successfully!");
        console.log(data);
      })
      .catch((error) => {
        alert("Failed to Send the Message");
        console.error("Error:", error);
      });

    setName("");
    setEmail("");
    setMessage("");
    setIsLoading(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <LoadingComponent isLoading={isLoading} />
      <h3 className="text-heading-6 sm:text-heading-4 font-semibold text-gray-900">
        Send us a message
      </h3>
      <form
        onSubmit={handleSubmit}
        className="mt-4 space-y-4 flex flex-col gap-4"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm border-2 p-3 focus:outline-dashed focus:outline-gray-2 focus:outline-1"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm border-2 p-3 focus:outline-dashed focus:outline-gray-2 focus:outline-1"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-lg font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm border-2 p-3 focus:outline-dashed focus:outline-gray-2 focus:outline-1"
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
