"use client";

import { Button, Kbd } from "flowbite-react";
import { MdLocationPin } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import {
  FaCalendarMinus,
  FaMagnifyingGlass,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaFacebook,
  FaLinkedin,
  FaMessage,
  FaYoutube,
} from "react-icons/fa6";

const SearchBar = () => {
  return (
    <div>
      <div className="flex justify-center whitespace-nowrap text-2xl md:text-4xl font-extrabold text-black-100 mb-4 ">
        <p className="hidden md:block">Find the best Shopify apps</p>
      </div>
      <div className="flex justify-center text-center whitespace-nowrap text-2xl md:text-4xl font-extrabold text-black-100 mb-4">
        <p className="md:hidden">
          Find the best
          <br /> <span className="text-4xl text-blue-600">Shopify apps</span>
        </p>
      </div>
      <div className="flex justify-center flex-wrap align-middle gap-1 md:gap-5 font-semibold">
        <Kbd className="rounded-3xl w-20 p-2 text-center bg-sky-100 border-cyan-400 text-md font-extrabold	text-blue-800">
          Apps
        </Kbd>
        <Kbd className="bg-white border-none align-middle font-semibold text-md p-2">
          Agencies
        </Kbd>
        <Kbd className="bg-white border-none align-middle font-semibold text-md p-2">
          Themes
        </Kbd>
        <Kbd className="bg-white border-none align-middle font-semibold text-md p-2">
          Services
        </Kbd>
      </div>
      <div className="flex justify-center flex-wrap d-block align-middle m-4">
        <Button.Group>
          <Button className=" hidden md:block rounded-none w-40" color="gray">
            <MdLocationPin size={20} color="grey" />
            destinations
            <FaAngleDown size={20} color="grey" />
          </Button>
          <Button className=" hidden md:block rounded-none w-40" color="gray">
            <FaCalendarMinus size={20} color="grey" />
            &nbsp;Check in
            <FaAngleDown size={20} color="grey" />
          </Button>
          <Button className=" hidden md:block rounded-none w-40" color="gray">
            <FaCalendarMinus size={20} color="grey" />
            &nbsp;Check out
            <FaAngleDown size={20} color="grey" />
          </Button>
          <Button className=" hidden md:block rounded-none w-40" color="gray">
            <FaCalendarMinus size={20} color="grey" />
            &nbsp;Add guests
            <FaAngleDown size={20} color="grey" />
          </Button>

          <Button className="hidden md:block rounded-none	bg-blue-700">
            <FaMagnifyingGlass size={20} />
            &nbsp;Search
          </Button>
        </Button.Group>
      </div>

      <div className="md:hidden flex flex-col items-center m-4">
        {/* <Button.Group> */}
        <Button className="justify-start rounded-none w-80 m-2" color="gray">
          <MdLocationPin spacing={5} size={20} color="grey" />
          destinations
        </Button>
        <Button className="justify-start rounded-none w-80 m-2" color="gray">
          <FaCalendarMinus size={20} color="grey" />
          &nbsp;Check in
        </Button>
        <Button className="justify-start rounded-none w-80 m-2" color="gray">
          <FaCalendarMinus size={20} color="grey" />
          &nbsp;Check out
        </Button>
        <Button className="justify-start rounded-none w-80 m-2" color="gray">
          <FaCalendarMinus size={20} color="grey" />
          &nbsp;Add guests
        </Button>

        <Button className="rounded-none w-80 m-2 bg-blue-700">
          <FaMagnifyingGlass size={20} />
          &nbsp;Search
        </Button>
        {/* </Button.Group> */}
      </div>

      <div className="flex justify-center flex-wrap align-middle gap-5 font-semibold">
        <p className="hidden md:block">Popular now:</p>
        <Kbd className="flex justify-center rounded-3xl h-8 w-28 text-center bg-white border-slate-300 text-xs">
          <FaSquareInstagram size={20} />
          &nbsp; settings
        </Kbd>
        <Kbd className="flex justify-center rounded-3xl h-8 w-28 text-center bg-white border-slate-300 text-xs">
          <FaSquareXTwitter size={20} />
          &nbsp; phone
        </Kbd>
        <Kbd className="flex justify-center rounded-3xl h-8 w-28 text-center bg-white border-slate-300 text-xs">
          <FaFacebook size={20} />
          &nbsp; camera
        </Kbd>
        <Kbd className="flex justify-center rounded-3xl h-8 w-28 text-center bg-white border-slate-300 text-xs">
          <FaLinkedin size={20} />
          &nbsp; calendar
        </Kbd>
        <Kbd className="flex justify-center rounded-3xl h-8 w-28 text-center bg-white border-slate-300 text-xs">
          <FaMessage size={20} />
          &nbsp; messages
        </Kbd>
        <Kbd className="flex justify-center rounded-3xl h-8 w-32 text-center bg-white border-slate-300 text-xs">
          <FaYoutube size={20} />
          &nbsp; social-media
        </Kbd>
      </div>

      <div className="h-[1px] w-[99%] bg-slate-300 my-12 mx-2" />
    </div>
  );
};

export default SearchBar;
