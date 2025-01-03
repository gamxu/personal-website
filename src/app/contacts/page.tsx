"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

export default function ContactPage() {
  const myEmail = "wuttipat.gamxu@gmail.com";
  const myPhone = "+66 811790216";
  const myAddress =
    "Suthep Rd, Tambon Su Thep, Mueang Chiang Mai District, Chang Wat Chiang Mai 50200";

  const [value, setValue] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    setValue(textarea.value);

    // Auto-resize textarea
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(""); // Clear previous status message

    // Send form data to the backend (e.g., an API endpoint)
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      setStatus("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } else {
      setStatus(data.error || "Something went wrong!");
    }
  };

  return (
    <div className="max-w-4xl mx-auto pt-[25px] pb-[100px] px-5">
      <h1 className="text-3xl font-semibold text-center mb-6">Contact Me!</h1>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
        <p>
          If you have any questions or inquiries, feel free to reach out to me! I would love to hear anything from you.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
        <ul>
          <li className="mb-2 grid grid-cols-1 sm:grid-cols-8 gap-2 items-center">
            <span className="font-semibold col-span-1 sm:col-span-2">
              {/* Title Column */}Email:
            </span>
            <a
              href={"mailto:" + myEmail}
              className="text-blue-500 col-span-1 sm:col-span-6"
            >
              {myEmail}
            </a>
          </li>
          <li className="mb-2 grid grid-cols-1 sm:grid-cols-8 gap-2 items-center">
            <span className="font-semibold col-span-1 sm:col-span-2">
              {/* Title Column */}Phone:
            </span>
            <a
              href={"tel:" + myPhone}
              className="text-blue-500 col-span-1 sm:col-span-6"
            >
              {myPhone}
            </a>
          </li>
          <li className="mb-2 grid grid-cols-1 sm:grid-cols-8 gap-2 items-center">
            <span className="font-semibold col-span-1 sm:col-span-2">
              {/* Title Column */}Address:
            </span>
            <p className="col-span-1 sm:col-span-6">{myAddress}</p>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Contact Form</h3>
        <form onSubmit={handleSubmit} method="POST">
          <div className="mb-4">
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md 
              bg-white-primary text-black-pure text-base"
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="email">Your Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="example@gmail.com"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md 
              bg-white-primary text-black-pure text-base"
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="message">Your Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              value={value}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md 
              bg-white-primary text-black-pure text-base"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-orange-normal hover:bg-orange-normal/80 text-white px-6 py-2 rounded-md mt-4"
            >
              Send Message
            </button>
          </div>
        </form>
        {status && <p className="mt-4 text-center text-lg">{status}</p>}
      </div>
    </div>
  );
}
