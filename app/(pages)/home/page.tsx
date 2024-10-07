"use client";
import { Button } from "@components/ui/button";
import UserLink from "@components/UserLink";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [addedLinksTracker, setAddedLinksTracker] = useState<number[]>([]);

  return (
    <section className="w-full max-w-[90rem] m-auto flex lg:flex-row p-4 gap-6 bg-gray-lightest md:justify-center">
      <div className="desktop-preview bg-white hidden lg:flex justify-center align-center flex-[0.4] rounded-[.75rem]">
        <Image
          src="../iphone-mockup.svg"
          width={307}
          height={631}
          alt="preview"
        />
      </div>
      <div className="bg-white w-full md:max-w-[45rem] lg:max-w-[100%] md:auto flex flex-col lg:flex-[.6] rounded-[.75rem]">
        <div className="customize-links w-full flex flex-col gap-6 p-6 rounded-[.5rem] border-[1px] border-gray-lightest">
          <div className="flex flex-col gap-10">
            <div>
              <h1 className="text-dark-gray text-h-md font-extrabold mb-2">
                Customize your Links
              </h1>
              <p className="text-gray text-h-normal font-not-bold">
                Add/edit/remove links below and then share all your profiles
                with the world!
              </p>
            </div>
            <Button
              className="px-[0.69rem] py-[1.69rem] bg-gray-lightest text-purple font-bold text-md rounded-[.5rem] border-[1px] border-purple hover:bg-purple-lightest focus:bg-purple-lightest disabled:border-gray disabled:text-gray"
              onClick={() => setAddedLinksTracker((prev) => [...prev, 1])}
            >
              + Add new link
            </Button>
          </div>
          <div className="rounded-[.75rem]">
            {!addedLinksTracker || addedLinksTracker?.length === 0 ? (
              <>
                <div className="w-full bg-gray-lightest rounded-[.75rem] text-center py-[2.91rem] md:py-[5.16rem] px-[1.25rem] flex flex-col gap-6 justify-center align-center">
                  <Image
                    src="../get-started-pic.svg"
                    alt="get-started img"
                    width={125}
                    height={80}
                    className="self-center mb-4"
                  />

                  <h1 className="text-h-md md:text-h-big font-extrabold text-dark-gray">
                    Let’s get you started
                  </h1>
                  <p className="text-h-normal font-not-bold text-gray">
                    Use the “Add new link” button to get started. Once you have
                    more than one link, you can reorder and edit them. We’re
                    here to help you share your profiles with everyone!
                  </p>
                </div>
              </>
            ) : (
              <>
                {addedLinksTracker?.map((tracker, i) => (
                  <UserLink key={i} />
                ))}
              </>
            )}
          </div>
        </div>
        <div className="w-full mt-6 mb-4 border-[0.0625rem] border-solid border-gray-light" />
        <Button
          className="w-full md:w-fit md:px-[1.69rem] md:py-[0.69rem] md:self-end text-right bg-purple text-white pointer-events-auto cursor-pointert px-[0.69rem] py-[1.69rem] hover:bg-purple-light hover:font-bold disabled:bg-purple disabled:opacity-25 disabled:font-bold focus:bg-purple-light focus:font-bold"
          disabled
        >
          Save
        </Button>
      </div>
    </section>
  );
}
