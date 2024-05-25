"use client";
import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import { ErrorToast, IsEmail, SuccessToast } from "@/utils/FormValidation";
import axios from "axios";

const Subscribe = () => {
  const [data, setData] = useState({ email: "" });
  const [submit, setSubmit] = useState(false);

  const inputOnChange = (name: string, value: string) => {
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  async function formSubmit() {
    if (IsEmail(data.email)) {
      ErrorToast("Valid Email Address Required!");
    } else {
      const rawResponse = await axios.post("/api/subscribe", data);
      const statusCode = rawResponse.status;
      if (statusCode === 200) {
        SuccessToast("Request Completed");
        setData({ email: "" });
      } else {
        ErrorToast("Request Fail");
      }
    }
  }

  return (
    <div className="mx-auto max-w-md rounded-lg bg-white dark:bg-black/[0.96] shadow">
      <div className="mb-6">
        <input
          value={data.email}
          onChange={(e) => {
            inputOnChange("email", e.target.value);
          }}
          type="text"
          placeholder="Your Email Address"
          className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none bg-gray-100 text-[#334155] focus:dark:bg-gray-50"
        />
      </div>
      <SubmitButton
        onClick={formSubmit}
        className="bg-cyan dark:bg-slate-900  text-gray-400 dark:text-white border-neutral-200 dark:border-slate-800"
        submit={submit}
        text="Subscribe"
      />
    </div>
  );
};

export default Subscribe;
