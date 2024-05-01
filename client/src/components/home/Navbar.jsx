import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "reactstrap";
import { Link } from "react-router-dom";
import profile from "../../assets/images/pug.jpg"

function Navbar() {
  return (
    <Container className="h-10 p-6 text-white relative mb-10 bg-[#232946]" fluid>
      <div className="absolute right-6 flex items-center space-x-6">
        <label
          htmlFor="default-search"
          className="text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#444962] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="search"
            required
          />
          <div className="absolute left-3 top-2">
            <svg
              className="text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        </div>

        <div className="flex space-x-3 justify-center items-center">
          <p>My Profile</p>
          <img src={profile} width={60} height={60} alt="" className="rounded-lg" />
        </div>
      </div>
    </Container>
  );
}

export default Navbar;
