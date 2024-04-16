import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "reactstrap";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Container
      className="bg-success border flex justify-around items-center p-2"
      fluid
    >
      <h1 className="text-2xl font-semibold text-yellow-50">Bamboo Blog</h1>
      <div className="flex gap-3">
        <Link to="/signin">
          <Button color="warning">Sign in</Button>
        </Link>
        <Link to="/register">
          <Button color="light" outline>
            Sign Up
          </Button>
        </Link>
      </div>
    </Container>
  );
}

export default Navbar;
