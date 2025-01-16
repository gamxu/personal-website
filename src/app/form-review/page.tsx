"use client";

import { StarRating } from "@/components/common/starRating";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Spinner from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { formatInternalUrl } from "@/lib/utils";
import React, { useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface IFormReviewInput {
  name?: string;
  message: string;
  communication: number;
  professionalism: number;
  qualityOfWork: number;
  timeliness: number;
  problemSolving: number;
  creativity: number;
  responsiveness: number;
  reliability: number;
  technicalSkills: number;
}

interface RatingFactor {
  name: string;
  label: string;
  description: string;
}

const RATING_FACTORS: RatingFactor[] = [
  {
    name: "communication",
    label: "Communication",
    description: "Effectiveness in exchanging ideas and information",
  },
  {
    name: "professionalism",
    label: "Professionalism",
    description: "Maintaining a respectful and professional manner",
  },
  {
    name: "qualityOfWork",
    label: "Quality of Work",
    description: "Standard of the overall work",
  },
  {
    name: "timeliness",
    label: "Timeliness",
    description: "Completing tasks or projects within set deadlines",
  },
  {
    name: "problemSolving",
    label: "Problem-Solving",
    description: "Ability to address challenges and find solutions",
  },
  {
    name: "creativity",
    label: "Creativity/Innovation",
    description: "Originality and innovative thinking in work",
  },
  {
    name: "responsiveness",
    label: "Responsiveness",
    description: "Speed and efficiency in addressing feedback or queries",
  },
  {
    name: "reliability",
    label: "Reliability",
    description: "Consistency in meeting commitments and expectations",
  },
  {
    name: "technicalSkills",
    label: "Technical Skills",
    description: "Proficiency and expertise in relevant technical areas",
  },
];

export default function FormReviewPage() {
  const { register, handleSubmit, control, reset } = useForm<IFormReviewInput>({
    defaultValues: {
      name: "",
      message: "",
      communication: 0,
      professionalism: 0,
      qualityOfWork: 0,
      timeliness: 0,
      problemSolving: 0,
      creativity: 0,
      responsiveness: 0,
      reliability: 0,
      technicalSkills: 0,
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    if (!isFormFilled(data)) {
      toast.error("Please fill in the form");
      return;
    }
    try {
      setIsSubmitting(true);

      const formData = new URLSearchParams({
        name: data.name,
        message: data.message,
        communication: data.communication,
        professionalism: data.professionalism,
        qualityOfWork: data.qualityOfWork,
        timeliness: data.timeliness,
        problemSolving: data.problemSolving,
        creativity: data.creativity,
        responsiveness: data.responsiveness,
        reliability: data.reliability,
        technicalSkills: data.technicalSkills,
      }).toString();

      const apiUrl = formatInternalUrl("/api/review/send");
      console.log(apiUrl);
      const response = await fetch(apiUrl ?? "", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      });

      const result = await response.json();

      if (result.result === "success") {
        toast.success(result.message || "Form submitted successfully");
        reset(); // Reset the form only on success
      } else {
        toast.error(result.message || "Failed to submit the form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit the form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto pt-[25px] pb-[100px] px-5">
      <h1 className="text-3xl font-semibold text-center mb-6">Review Me</h1>

      <div className="mb-6">
        <p className="text-center text-white-secondary">
          Thank you for taking the time to review my work. I truly value your
          feedback, as it helps me to grow and continuously improve. I look
          forward to further opportunities for development and collaboration.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Review Form</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
          className="flex flex-col gap-5"
        >
          <div className="mb-6">
            <Label htmlFor="name">
              Your Name{" "}
              <span className="text-gray-400 text-sm font-light">
                (optional)
              </span>
            </Label>
            <Input
              {...register("name")}
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-md 
              bg-white-primary text-black-pure text-base"
            />
          </div>
          <div>
            <p className="text-sm font-medium mb-2">Rate My Work</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4">
              {RATING_FACTORS.map((factor) => (
                <div
                  key={factor.name}
                  className="flex flex-col justify-start items-center mb-4 px-4 py-5 gap-3 
                bg-black-light rounded-md"
                >
                  <div className="flex flex-col items-center">
                    <label className="block font-medium">{factor.label}</label>
                    <p className="text-xs text-center text-slate-400">
                      {factor.description}
                    </p>
                  </div>

                  <Controller
                    name={factor.name as keyof IFormReviewInput}
                    control={control}
                    render={({ field }) => (
                      <div className="flex flex-col gap-1 justify-between items-center">
                        <StarRating
                          value={field.value ?? 0}
                          onChange={field.onChange}
                        />
                        <p className="text-xs text-slate-400">
                          {getRatingDetails(field.value ?? 0)}
                        </p>
                      </div>
                    )}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <Label htmlFor="message">Your Message</Label>
            <Textarea
              {...register("message")}
              id="message"
              name="message"
              placeholder="Say something about me..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md 
              bg-white-primary text-black-pure text-base"
            />
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={isSubmitting} // Disable the button during submission
              className="bg-orange-normal hover:bg-orange-normal/80 text-white w-[150px] py-2 rounded-md"
            >
              {isSubmitting ? <Spinner className="h-6 w-6 border-[3px]"/> : "Send Message"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

const getRatingDetails = (rating: string | number) => {
  switch (rating) {
    case 1:
      return "Terrible";
    case 2:
      return "Bad";
    case 3:
      return "Average";
    case 4:
      return "Good";
    case 5:
      return "Excellent";
    default:
      return "";
  }
};

const isFormFilled = (data: FieldValues) => {
  return (
    data.message !== "" ||
    data.communication > 0 ||
    data.professionalism > 0 ||
    data.qualityOfWork > 0 ||
    data.timeliness > 0 ||
    data.problemSolving > 0 ||
    data.creativity > 0 ||
    data.responsiveness > 0 ||
    data.reliability > 0 ||
    data.technicalSkills > 0
  );
};
