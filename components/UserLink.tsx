"use client";
import { GripHorizontal } from "lucide-react";

import { z } from "zod";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const UserLink = () => {
  return (
    <div className="flex flex-col gap-[.25rem] p-[1.25rem] bg-gray-lightest mb-6 rounded-[.75rem]">
      <div className="flex justify-between gap-12">
        <div className="flex gap-2">
          <GripHorizontal className="text-gray w-[.75rem]" />
          <h1 className="text-gray text-h-normal font-extrabold">Link #1</h1>
        </div>
        <p className="text-gray text-h-normal font-not-bold">Remove</p>
      </div>
      <div>
        <label htmlFor="Link" className="text-b-s text-dark-gray mb-1">
          Platform
        </label>{" "}
        <br />
        <select
          name="platforms"
          id="platforms"
          className="w-full rounded-lg py-3 px-8 border-solid border-[1px] border-gray-light"
        >
          <option value="youtube">Youtube</option>
          <option value="github">Github</option>
          <option value="linkedIn">linkedIn</option>
          <option value="freecodecamp">freeCodeCamp</option>
        </select>
      </div>
      <div>
        <label htmlFor="Link" className="text-b-s text-dark-gray mb-1">
          Link
        </label>{" "}
        <br />
        <input
          type="text"
          name="link"
          id="link-id"
          placeholder="https://www.youtube.com/benwright"
          required
          className="w-full rounded-lg py-3 px-4 border-solid border-[1px] border-gray-light"
        />
      </div>
    </div>
  );
};

export default UserLink;
