import { Box, Stack, Typography } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
    position='relative'
    p='20px'
  >
    <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
      Fitness Club
    </Typography>
    <Typography
      fontWeight={700}
      sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      mb='23px'
      mt='30px'
    >
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize='22px' fontFamily='Alegreya' lineHeight='35px'>
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a
        href='#exercises'
        style={{
          marginTop: "45px",
          textDecoration: "none",
          width: "200px",
          textAlign: "center",
          background: "#FF2625",
          padding: "14px",
          fontSize: "22px",
          textTransform: "none",
          color: "white",
          borderRadius: "4px",
        }}
      >
        Explore Exercises
      </a>
    </Stack>
    <Typography
      fontWeight={600}
      color='#FF2625'
      sx={{
        opacity: "0.1",
        display: { lg: "block", xs: "none" },
        fontSize: "200px",
      }}
    >
      Exercise
    </Typography>
    {/* <img src={HeroBannerImage} alt='hero-banner' className='hero-banner-img' /> */}
    <img
      src='https://images.unsplash.com/photo-1581122584612-713f89daa8eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D'
      alt='hero-banner'
      className='hero-banner-img'
    />
  </Box>
);

export default HeroBanner;
