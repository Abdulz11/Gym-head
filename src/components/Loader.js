import React from "react";
import { Stack } from "@mui/material";
import { PulseLoader } from "react-spinners";

const Loader = () => (
  <Stack
    direction='row'
    justifyContent='center'
    alignItems='center'
    width='100%'
  >
    <PulseLoader />
  </Stack>
);

export default Loader;
