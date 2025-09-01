import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const location = useLocation();
  console.log(location);

  return (
    <Stack
      direction='row'
      justifyContent='space-around'
      sx={{
        gap: { sm: "123px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px='20px'
    >
      <Link to='/'>
        <img
          src={Logo}
          alt='logo'
          style={{ width: "48px", height: "48px", margin: "0px 20px" }}
        />
      </Link>
      <Stack
        direction='row'
        gap='40px'
        fontFamily='Alegreya'
        fontSize='24px'
        alignItems='flex-end'
      >
        <Link
          to='/'
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: location.pathname == "/" ? "3px solid #FF2625" : "",
          }}
        >
          Home
        </Link>
        <Link
          to='/exercise/:id'
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: location.pathname.startsWith("/exercise")
              ? "3px solid #FF2625"
              : "",
          }}
        >
          Exercises
        </Link>
        {/* <a
          href='exercises/*'
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          
        </a> */}
      </Stack>
    </Stack>
  );
};

export default Navbar;
