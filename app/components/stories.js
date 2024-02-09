"use client";

import { Button, Card } from "flowbite-react";
import Image from "next/image";
import image1 from "../../public/1.jpg";
import image2 from "../../public/2.jpg";
import image4 from "../../public/4.jpg";
import image6 from "../../public/6.jpg";
// import data from "./data";

const data = [
  {
    image: image1,
    title: "Noteworthy technology acquisitions 2021",
  },
  {
    image: image2,
    title: "Noteworthy technology acquisitions 2021",
  },
  {
    image: image4,
    title: "Noteworthy technology acquisitions 2021",
  },
  {
    image: image1,
    title: "Noteworthy technology acquisitions 2021",
  },
  {
    image: image2,
    title: "Noteworthy technology acquisitions 2021",
  },
  {
    image: image4,
    title: "Noteworthy technology acquisitions 2021",
  },
];

const Stories = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="flex justify-center whitespace-nowrap text-4xl font-extrabold text-black-100">
          <h1>Wordwide ecommerce success stories</h1>
        </div>
        <div className="flex justify-center whitespace-nowrap mt-3">
          <p className="text-sm text-black">
            politics, Power, and Personality. &nbsp;
            <span className="underline underline-offset-3 font-semibold">
              Read More
            </span>
          </p>
        </div>

        <div className="grid grid-cols-4 gap-7 mt-10 px-4 pb-4">
          <div className="grid grid-cols-subgrid gap-3 col-span-3">
            {data?.map((item, index) => (
              <div key={index}>
                <div className="flex">
                  <Card
                    className="max-w-sm rounded-none shadow-none border-none mb-8 "
                    renderImage={() => (
                      <Image
                        width={500}
                        height={300}
                        src={item.image}
                        alt={`image ${index + 1}`}
                      />
                    )}
                  >
                    <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                    </h5>

                  </Card>
                  <div className="md:block hidden h-64 w-[1px] bg-slate-300 ml-2" />

                  {/* {index % 3 === 2 && (
                    <div className="md:block hidden h-1 w-64 bg-slate-300 ml-2" />
                  )} */}
                </div>
              </div>
            ))}
          </div>
          <div>
            <Card className="max-w-sm rounded-none shadow-none border-grey-100">
              <div className="-m-6">
                <h5 className="flex text-2xl justify-center font-semibold tracking-tight bg-black text-white dark:text-white p-2">
                  Join the community
                </h5>
                <div className="px-6 py-8 flex gap-4 flex-col">
                  <h5 className="text-xl text-center font-semibold tracking-tight text-black dark:text-white">
                    To know everything about Shopify
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Connect, share , and engage with community and build
                    relationships.
                  </p>
                  <Button className="bg-red-700">
                    Subscribe for $100/YEAR
                  </Button>
                  <Button className="bg-red-700">
                    Subscribe for $100/YEAR
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="md:hidden container mx-auto px-4">
        <div className="text-center mt-8">
          <h1 className="text-4xl font-extrabold text-black-100">
            Wordwide ecommerce success stories
          </h1>
          <p className="text-sm text-black mt-3">
            politics, Power, and Personality. &nbsp;
            <span className="underline underline-offset-3 font-semibold">
              Read More
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
          {/* Story Cards */}
          <div className="max-w-sm">
            <Card
              renderImage={() => (
                <Image width={500} height={300} src={image1} alt="image 1" />
              )}
            >
              <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </Card>
          </div>
          {/* Repeat the above structure for other cards */}

          {/* Join the Community Card */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-4">
            <Card className="radius-none">
              <div className="-m-6">
                <h5 className="flex text-2xl justify-center font-semibold tracking-tight bg-black text-white dark:text-white p-2">
                  Join the community
                </h5>
                <div className="px-6 py-8 flex gap-4 flex-col">
                  <h5 className="text-xl text-center font-semibold tracking-tight text-black dark:text-white">
                    To know everything about Shopify
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Connect, share, and engage with the community and build
                    relationships.
                  </p>
                  <Button className="bg-red-700">
                    Subscribe for $100/YEAR
                  </Button>
                  <Button className="bg-red-700">
                    Subscribe for $100/YEAR
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stories;
