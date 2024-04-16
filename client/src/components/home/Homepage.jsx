import React from "react";
import { Button, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import mainbackground from "../../../src/assets/images/kelly.jpg";
import Navbar from "../home/Navbar";
import "../../index.css";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <Navbar />
      <Container>
        <img
          src={mainbackground}
          alt="background"
          className="object-cover h-96 w-3/5 m-auto mt-5"
        />
        <h3 className="font-bold text-3xl text-center my-3">
          Where Sharing is Growing
        </h3>
        <p className="text-xl text-center my-4 w-[800px] mx-auto">
          " Bamboo Blog is more than just a website; it's a thriving online
          community where anyone can access information, share their ideas and
          experiences, and learn alongside others. It's a space designed for
          growth, fueled by the collective knowledge and creativity of its
          members😊 ".
        </p>

        <div className="flex gap-12 m-auto mt-3">
          <div className="w-96 h-44 bg-amber-200 p-3 rounded-lg text-ellipsis overflow-hidden">
            <h4 className="font-semibold">
              Dive into a World of New Information:
            </h4>
            <ul>
              <li>Stay updated on current events and trending topics.</li>
              <li>Discover a wealth of informative and engaging articles.</li>
            </ul>
          </div>
          <div className="w-96 h-44 bg-amber-200 p-3 rounded-lg text-ellipsis overflow-hidden">
            <h4 className="font-semibold">
              Connect and Grow with Like-Minded Individuals:
            </h4>
            <ul>
              <li>Meet and interact with people who share your passions.</li>
              <li>
                Engage in stimulating conversations and insightful exchanges.
              </li>
            </ul>
          </div>
          <div className="w-96 h-44 bg-amber-200 p-3 rounded-lg text-ellipsis overflow-hidden">
            <h4 className="font-semibold">Become a Voice in the Community:</h4>
            <ul>
              <li>Share your expertise by writing informative blog posts.</li>
              <li>
                Captivate audiences with captivating stories and narratives.
              </li>
            </ul>
          </div>
          <div className="w-96 h-44 bg-amber-200 p-3 rounded-lg text-ellipsis overflow-hidden">
            <h4 className="font-semibold">
              Joining the Bamboo Blog Community is Easy:
            </h4>
            <ul>
              <li>Sign up for a free membership to unlock all the benefits.</li>
              <li>
                Unleash your inner writer and share your voice with the world.
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Homepage;
