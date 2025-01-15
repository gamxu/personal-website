"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const myEmail = "wuttipat.gamxu@gmail.com";
  const myPhone = "+66 811790216";
  const myAddress =
    "Suthep Rd, Tambon Su Thep, Mueang Chiang Mai District, Chang Wat Chiang Mai 50200";

  const { register, handleSubmit } = useForm<IFormInput>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data: FieldValues) => {
    setIsSubmitting(true);

    // Extract form data
    const { name, email, message } = data;

    // Create the mailto link dynamically based on form data
    const subject = `From Personal Website by ${name}`;
    const body =
      `Hello,\n\n` +
      `My name is ${name}, and I am reaching out to you via your website's contact form. Below are the details of my inquiry:\n\n` +
      `${message}\n\n` +
      `Thank you for your time, and I look forward to your response.\n\n` +
      `You can reach me at **${email}**\n\n` +
      `Best regards,\n${name}`;

    const mailtoLink = `mailto:${myEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    toast.loading("Redirecting...");

    // Redirect to the mailto link
    window.location.href = mailtoLink;

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitting(false); // Optional: Reset state after a timeout
    }, 5000);
  };

  return (
    <div className="max-w-4xl mx-auto pt-[25px] pb-[100px] px-5">
      <h1 className="text-3xl font-semibold text-center mb-4">Contact Me!</h1>
      <p className="mb-6 text-center">
        If you have any questions or inquiries, feel free to reach out to me! I
        would love to hear anything from you.
      </p>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
        <ul>
          <li className="mb-2 grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
            <span className="font-semibold col-span-1 sm:col-span-2">
              {/* Title Column */}Email:
            </span>
            <a
              href={"mailto:" + myEmail}
              className="text-blue-500 col-span-1 sm:col-span-10"
            >
              {myEmail}
            </a>
          </li>
          <li className="mb-2 grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
            <span className="font-semibold col-span-1 sm:col-span-2">
              {/* Title Column */}Phone:
            </span>
            <a
              href={"tel:" + myPhone}
              className="text-blue-500 col-span-1 sm:col-span-10"
            >
              {myPhone}
            </a>
          </li>
          <li className="mb-2 grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
            <span className="font-semibold col-span-1 sm:col-span-2">
              {/* Title Column */}Address:
            </span>
            <p className="col-span-1 sm:col-span-10">{myAddress}</p>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Contact Form</h3>
        <form onSubmit={handleSubmit(onSubmit)} method="POST">
          <div className="mb-4">
            <Label htmlFor="name">Your Name</Label>
            <Input
              {...register("name", { required: true })}
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-md 
              bg-white-primary text-black-pure text-base"
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="email">Your Email</Label>
            <Input
              {...register("email", { required: true })}
              id="email"
              name="email"
              type="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md 
              bg-white-primary text-black-pure text-base"
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="message">Your Message</Label>
            <Textarea
              {...register("message", { required: true })}
              id="message"
              name="message"
              placeholder="Type your message here..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md 
              bg-white-primary text-black-pure text-base"
            />
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={isSubmitting} // Disable the button during submission
              className="bg-orange-normal hover:bg-orange-normal/80 text-white px-6 py-2 rounded-md mt-4"
            >
              Send To Mail
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
