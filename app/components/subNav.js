"use client";

import { Button, Navbar, Dropdown } from "flowbite-react";

const SubNav = () => {
  return (
    <Navbar fluid className="bg-white">
      <Navbar.Brand href="#">
        <div className="self-center whitespace-nowrap text-md font-semibold text-black-100">
          <Dropdown label="World Cup 2023" inline>
            <Dropdown.Item>Home</Dropdown.Item>
            <Dropdown.Item>Company</Dropdown.Item>
            <Dropdown.Item>Team</Dropdown.Item>
            <Dropdown.Item>Features</Dropdown.Item>
          </Dropdown>
        </div>
      </Navbar.Brand>
      <div className="h-[24px] w-[2px] bg-slate-300 mx-4" />
      <div className="flex gap-3 items-center md:order-2">
        <p className="text-sm text-black">
          Become a&nbsp;
          <span className="underline underline-offset-3 font-semibold">
            Zola Vendor
          </span>
        </p>
        <p className="text-sm text-black">
          Shop&nbsp;
          <span className="underline  underline-offset-3 font-semibold">
            Zola Home
          </span>
        </p>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" className="text-md text-black">
          Home
        </Navbar.Link>
        <Navbar.Link href="#" className="text-md text-black">
          Company
        </Navbar.Link>
        <Navbar.Link href="#" className="text-md text-black">
          Team
        </Navbar.Link>
        <Navbar.Link href="#" className="text-md text-black">
          Features
        </Navbar.Link>
        <Navbar.Link href="#" className="text-md text-black">
          Marketplace
        </Navbar.Link>
        <Navbar.Link href="#" className="text-md text-black">
          Resources
        </Navbar.Link>
        <Navbar.Link href="#" className="text-md text-black">
          Forum
        </Navbar.Link>
      </Navbar.Collapse>
      <div className="h-[24px] w-[2px] bg-slate-300 mx-4" />
    </Navbar>
  );
};

export default SubNav;
