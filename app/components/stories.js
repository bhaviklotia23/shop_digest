"use client";

import { Button, Card } from "flowbite-react";
import Image from "next/image";
import image1 from "../../public/1.jpg";
import image2 from "../../public/2.jpg";
import image4 from "../../public/4.jpg";
import image6 from "../../public/6.jpg";

const Stories = () => {
  return (
    <div>
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

      <div class="grid grid-cols-4 gap-4 mt-10 px-4 pb-4">
        <div class="grid grid-cols-subgrid gap-4 col-span-3">
          <div>
            <Card
              className="max-w-sm"
              renderImage={() => (
                <Image width={500} height={300} src={image1} alt="image 1" />
              )}
            >
              <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </Card>
          </div>
          <div>
            <Card
              className="max-w-sm"
              renderImage={() => (
                <Image width={500} height={300} src={image2} alt="image 1" />
              )}
            >
              <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </Card>
          </div>
          <div>
            <Card
              className="max-w-sm"
              renderImage={() => (
                <Image width={500} height={300} src={image4} alt="image 1" />
              )}
            >
              <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </Card>
          </div>
          <div>
            <Card
              className="max-w-sm"
              renderImage={() => (
                <Image width={500} height={300} src={image6} alt="image 1" />
              )}
            >
              <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </Card>
          </div>
          <div>
            <Card
              className="max-w-sm"
              renderImage={() => (
                <Image width={500} height={300} src={image1} alt="image 1" />
              )}
            >
              <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </Card>
          </div>
          <div>
            <Card
              className="max-w-sm"
              renderImage={() => (
                <Image width={500} height={300} src={image2} alt="image 1" />
              )}
            >
              <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </Card>
          </div>
        </div>
        <div>
          <Card className="radius-none ">
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
                <Button className="bg-red-700">Subscribe for $100/YEAR</Button>
                <Button className="bg-red-700">Subscribe for $100/YEAR</Button>
              </div>
          </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Stories;
