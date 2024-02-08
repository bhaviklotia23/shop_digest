"use client";

import { Button, Navbar, Dropdown } from "flowbite-react";

const Header = () => {
  return (
    <Navbar fluid className="bg-red-600">
      <Navbar.Brand href="#">
        <svg
          className="w-[48px] h-[48px] text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1"
            d="M9 8h10M9 12h10M9 16h10M5 8h0m0 4h0m0 4h0"
          />
        </svg>
        <span className="self-center whitespace-nowrap md:text-base lg:text-lg xl:text-3xl font-semibold text-white">
          Shop Digest
        </span>
        <div className="h-[24px] w-[2px] bg-white mx-4" />
        <div className="self-center whitespace-nowrap text-xl font-semibold text-white">
          <Dropdown label="Platform" inline>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </Navbar.Brand>
      <div className="flex gap-3 items-center md:order-2">
        <svg
          class="w-6 h-6 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.1 12.6v-1.8A5.4 5.4 0 0 0 13 5.6V3a1 1 0 0 0-2 0v2.4a5.4 5.4 0 0 0-4 5.5v1.8c0 2.4-1.9 3-1.9 4.2 0 .6 0 1.2.5 1.2h13c.5 0 .5-.6.5-1.2 0-1.2-1.9-1.8-1.9-4.2ZM8.8 19a3.5 3.5 0 0 0 6.4 0H8.8Z" />
        </svg>

        <svg
          class="w-6 h-6 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="2"
            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
          />
        </svg>
        <Button size="xs" className="rounded-none	bg-blue-700">
          <span>
            <svg
              class="w-6 h-6 mr-1 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7c0-1.1.9-2 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6c.6 0 1 .4 1 1v3a1 1 0 1 1-2 0v-3c0-.6.4-1 1-1Z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          Add post
          <span>
            <svg
              class="w-6 h-6 ml-1 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </span>
        </Button>
        <span>
          <svg
            class="w-7 h-7 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </span>
        <p className="text-white">Login</p>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" className="text-white">
          APPS
        </Navbar.Link>
        <Navbar.Link href="#" className="text-white">
          THEMES
        </Navbar.Link>
        <Navbar.Link href="#" className="text-white">
          AGENCIES
        </Navbar.Link>
        <Navbar.Link href="#" className="text-white">
          FIND AN EXPERT
        </Navbar.Link>
        <Navbar.Link href="#" className="text-white">
          STORIES
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
